const axios = require('axios');
require('dotenv').config();

class ChatService {
  constructor() {
    this.accessToken = '';

    this.messages = [
      {
        role: 'system',
        content: `jhkv
        
`,
      },
    ];

    this.axiosInstance = axios.create();

    this.axiosInstance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const prev = err.config;
        if ((err.status === 403 || err.status === 401) && !prev.sent) {
          prev.sent = true;
          await this.refresh();
          prev.headers.Authorization = `Bearer ${this.accessToken}`;
          return this.axiosInstance(prev);
        }
        return Promise.reject(err);
      },
    );
  }

  async refresh() {
    console.log('refreshing');
    const response = await axios.post(
      'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
      'scope=GIGACHAT_API_PERS',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          RqUID: 'd9c8ccca-d2a6-40a5-90bc-0d951f2fe4ae',
          Authorization: `Basic ${process.env.GIGACHAT_KEY}`,
        },
      },
    );

    this.accessToken = response.data.access_token;
  }

  async ask(message) {
    if (!this.accessToken) {
      await this.refresh();
    }

    this.messages.push({ role: 'user', content: message });

    const response = await this.axiosInstance.post(
      'https://gigachat.devices.sberbank.ru/api/v1/chat/completions',
      {
        model: 'GigaChat-2',
        messages: this.messages,
        stream: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
        },
      },
    );

    const aiResponse = response.data.choices[0].message;

    this.messages.push(aiResponse);

    return aiResponse;
  }
}

module.exports = new ChatService();

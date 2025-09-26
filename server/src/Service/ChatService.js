const { GigaChat } = require('gigachat');
const { Agent } = require('node:https');

require('dotenv').config();

const systemPrompt = `# System Prompt

    ты мастер японскоого хокку, напиши мне хокку с этим словом, только не матерись плиз. ВНИМАТЕЛЬНО ПРОЧИТАЙ СЛОВО, ХОККУ ДОЛЖНА ОБЯЗАТЕЛЬНО ВКЛЮЧАТЬ ЭТО СЛОВО В СЕБЯ!!!!

.`;

class AIService {
  #model;

  #messages = [{ role: 'system', content: systemPrompt }];

  constructor() {
    this.#model = new GigaChat({
      credentials: process.env.GIGACHAT_KEY,
      scope: 'GIGACHAT_API_PERS',
      model: 'gigachat',
      httpsAgent: new Agent({ rejectUnauthorized: false }),
    });
  }

  async ask(question) {
console.log('-------------', question);

    try {
      this.#messages.push({ role: 'user', content: question });

    const response = await this.#model.chat({
      messages: this.#messages,
    });

    const content = response.choices[0]?.message.content;

    this.#messages.push({ role: 'assistant', content });
    console.log(content);
    
    return content;
    } catch (error) {
      console.log(({error : error}));
      
    }



    
  }
}

const aIService = new AIService();
module.exports = aIService;

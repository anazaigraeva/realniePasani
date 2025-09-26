const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-unused-vars
app.listen(PORT, (e) => {
  console.log(`Server running on ${PORT}`);
  console.log(e);
  
});

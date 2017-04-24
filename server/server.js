require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());



app.get('/',(req,res)=>{
  res.send('Hello')
})
app.listen(PORT, () => {
  console.warn(`Listening on port: ${PORT}`)
});

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(Path.join(__dirname, '../Output')));

app.get('*', (request, response) => {
  response.sendFile(Path.resolve(__dirname, '../Output/index.html'));
});
app.post('*', (req,res) => {
  console.log(req.body)
  res.end();
})

app.listen(PORT, () => {
  console.warn(`Listening on port: ${PORT}`);
});

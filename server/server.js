/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use(express.static(Path.join(__dirname, '../Client/Output')));

// app.get('/', (req, res) => {
//   res.send('Hello');
// });

app.listen(PORT, () => {
  console.warn(`Listening on port: ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db/config')
const port = 8080;
const app = express();
connection.connect();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', require('./controls/routes'));

app.listen(port, () => {
  console.log(`Server starts on http://localhost:${port}`);
});
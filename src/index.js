const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');


app.use(routes);
app.use(cors());
app.use(express.json());

app.listen(3333);

module.exports = app;

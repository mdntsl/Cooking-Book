const express = require('express');
const router = require('./routs/router');
const cors = require('cors');
const bodyParser = require('body-parser');




const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use('/', router);

app.listen('3000');
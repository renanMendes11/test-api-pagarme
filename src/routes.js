const express = require('express');
const routes = express.Router();
const PaymentController = require('./PaymentController');

routes.post('/', PaymentController.index);
routes.post('/postback', PaymentController.post);
routes.get('/cards', PaymentController.return_cards);

module.exports = routes
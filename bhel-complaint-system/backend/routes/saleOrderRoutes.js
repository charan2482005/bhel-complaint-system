const express = require('express');

const router = express.Router();

const {
  createSaleOrder,
  getAllSaleOrders
} = require('../controllers/saleOrderController');

router.post('/create', createSaleOrder);

router.get('/all', getAllSaleOrders);

module.exports = router;
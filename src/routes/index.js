//Combines all separated routes into a single file
const express = require('express');
const router = express.Router();
const productRouter = require('./products');
const customerRouter = require('./customer');

router.use('/products', productRouter);
router.use('/customer', customerRouter);

module.exports = router;
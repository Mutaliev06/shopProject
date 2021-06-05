const { Router } = require('express');
const router = Router()

router.use('/', require('./brands'));

router.use('/', require('./users'));

router.use('/', require('./categories'));

router.use('/', require('./products'));

router.use('/', require('./carts'));

router.use('/', require('./reviews'));

module.exports = router
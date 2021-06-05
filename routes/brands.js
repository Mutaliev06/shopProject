const { Router } = require ('express');
const brandsController = require("../controllers/brands")
const router = Router()

router.get('/brands/:id/products')

router.get('/brands')

router.delete('/brands/:id')

router.patch('/brands/:id')
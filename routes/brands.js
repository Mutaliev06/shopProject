const { Router } = require ('express');
const brandsController = require("../controllers/brands")
const router = Router()


router.post('/brands')

router.delete('/brands/:id')

router.patch('/brands/:id')
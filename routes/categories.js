const { Router } = require ('express');
const categoriesController = require("../controllers/categories")
const router = Router()

router.get('/categories')

router.post('/categories')

router.delete('/categories/:id')

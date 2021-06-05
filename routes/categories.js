const { Router } = require ('express');
const categoriesController = require("../controllers/categories")
const router = Router()

router.get('/categories', categoriesController.getCategories)

router.post('/categories',categoriesController.postCategories)

router.delete('/categories/:id', categoriesController.deleteCategories)

router.patch('/categories/:id', categoriesController.patchCategoriesById)

module.exports = router
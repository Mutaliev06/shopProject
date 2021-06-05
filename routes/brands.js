const { Router } = require ('express');
const brandsController = require("../controllers/brands")
const router = Router()


router.post('/brands', brandsController.postBrands)

router.delete('/brands/:id',brandsController.deleteBrands)

router.patch('/brands/:id', brandsController.patchBrands)


module.exports = router
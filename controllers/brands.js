const Brands = require('../models/Brand');

class brandsController {

  async getBrandsByProduct(req, res) {
    try {
      const brands = await Brands.findById({product: req.params.id}).lean()
      res.json(brands)
    } catch (e) {
      console.log(e.message)
    }
  }

  async postBrands(req, res) {
    try {
      const brands = new Brands({ name: req.body.name}).lean()
      await brands.save()
      res.json(brands)
    }catch (e) {
      console.log(e.message)
    }
  }

  async deleteBrands(req, res) {
    try {
      const brands = await Brands.findByIdAndDelete(req.body.id).lean()
      res.json(brands)
    } catch (e) {
      console.log(e.message)
    }
  }

  async patchBrands (req, res) {
    try{
      const id = req.params.id
      const { name } = req.body
      const brand = await Brands.findByIdAndUpdate(id, {name}, {new:true}).lean()
      res.json(brand)
    }catch (e) {
      console.log(e.message)
    }
  }

}

module.exports = new brandsController()
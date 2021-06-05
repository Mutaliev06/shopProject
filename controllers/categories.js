const Categories = require('../models/Category')

class categoriesController {

  async getCategories (req, res) {
    try {
      const categories = await Categories.find({}).lean()
      res.json(categories)
    }catch (e) {
      console.log(e.message)
    }
  }

  async getCategoriesByProduct(req, res) {
    try {
      const categories = await Categories.findById({product: req.params.id}).lean()
      res.json(categories)
    }catch (e) {
      console.log(e.message)
    }
  }

  async postCategories (req, res) {
    try {
      const categories = new Categories ({name:req.params.name}).lean()
      await categories.save()
      res.json(categories)
    }catch (e) {
      comnsole.log(e.message)
    }
  }

  async deleteCategories(req, res) {
    try {
      const categories = await Categories.findOneAndDelete({_id: req.body.id}).lean()
      res.json(categories)
    }catch (e) {
      console.log(e.message)
    }
  }

}
const Products = require("../models/Product")

class productsController {
  async getProducts(req, res) {
    try {
      const products = await Products.find({}).lean()
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async getProductsByCategory(req, res) {
    try {
      const products = await Products.findById({ category: req.params.id }).lean()
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async getProductByBrand(req, res) {
    try {
      const products = await Products.findById({ brand: req.params.id }).lean()
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async createProduct(req, res)  {
    try {
      const products = new Products({
        title: req.body.title,
        category: req.body.category,
        brand: req.body.brand,
        price: req.body.price,
        amount: req.body.amount
      })
      await products.save()
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async deleteProduct(req, res) {
    try {
      const products = await Products.findByIdAndDelete(req.body.id).lean()
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async updateProduct(req, res) {
    try {
      const id = req.params.id
      const { title, category, brand, price, amount } = req.body
      const product = await Products.findByIdAndUpdate( id, {title, category, brand, price, amount}, {new:true}).lean()
      res.json(product)
    } catch (e) {
      res.json(e.message)
    }
  }
}

module.exports = new productsController()
const Products = require("../models/Product")
const path = require("path")

class productsController {
  async getProducts(req, res) {
    try {
      const products = await Products.find({})
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async getProductsByCategory(req, res) {
    try {
      const products = await Products.find({ category: req.params.id })
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async getProductByBrand(req, res) {
    try {
      const products = await Products.find({ brand: req.params.id })
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async createProduct(req, res)  {
    const image = req.files.file
    const newFileName = `./images/${Math.random() * 10000}${path.extname(image.name)}`
    console.log(req.files)

    try {
      const products = new Products({
        title: req.body.title,
        category: req.body.category,
        pathToView: newFileName,
        brand: req.body.brand,
        price: req.body.price
      })
      await products.save()
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
    try {
        await image.mv(newFileName, (err) => {
          if (err) {
            console.log("error")
          } else {
            res.json("файл загружен")
          }
        })
    } catch (e) {
      res.json(e.message)
    }
  }
  async deleteProduct(req, res) {
    try {
      const products = await Products.findByIdAndDelete(req.body.id)
      res.json(products)
    } catch (e) {
      res.json(e.message)
    }
  }
  async updateProduct(req, res) {
    try {
      const id = req.params.id
      const { title, category, brand, price, amount } = req.body
      const product = await Products.findByIdAndUpdate( id, {title, category, brand, price, amount}, {new:true})
      res.json(product)
    } catch (e) {
      res.json(e.message)
    }
  }

}

module.exports = new productsController()
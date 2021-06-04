const Carts = require("../models/Cart")

class cartsController {
  async cartProductPost(req, res) {
    try {
      const cart = new Carts({
        products: [
          {
          item: req.body.item
          },
          {
            amount: req.body.amount
          }
          ],
        user: req.body.user
      })
      await cart.save()
      res.json(cart)
    } catch (e) {
      res.json(e.message)
    }
  }
  async cartDelete(req ,res) {
    try {
      const cart = await Carts.findByIdAndDelete(req.params.id).lean()
      res.json(cart)
    } catch (e) {
      res.json(e.message)
    }
  }
}

module.exports = new cartsController()
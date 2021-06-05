const Users = require('../models/User')

class userController {
    async postUser(req, res) {
        try {
            const User = new Users({
                name: req.body.name,
                login: req.body.login,
                password: req.body.password
            })
            await user.save()
            res.json(user)
        } catch (e) {
            res.json(e.message)
        }
    }
}

module.exports = new userController();
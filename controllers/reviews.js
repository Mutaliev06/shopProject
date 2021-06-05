const Reviews = require('../models/Review')

class reviewController {
    async getReviewId(req, res) {
        try {
            const review = await Reviews.find({
                product: req.params.id
            })
            res.json(review);
        } catch (e) {
            res.json(e.message)
        }
    }

    async postReviewId(req, res) {
        try {
            const review = new Reviews({
                text: req.body.text,
                user: req.body.user,
                product: req.body.product
            }).lean()
            await review.save()
            res.json(review)
        } catch (e) {
            res.json(e.message)
        }
    }

    async deleteReview(req, res) {
        try {
            const review = await Reviews.findByIdAndDelete(req.params.id)
            res.json(review)
        } catch (e) {
            res.json(e.message)
        }
    }
}


module.exports = new reviewController();
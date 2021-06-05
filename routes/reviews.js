const { Router } = require('express');
const reviewController = require('../controllers/reviews');
const router = Router();

router.get('/product/:id/reviews', reviewController.getReviewId)

router.post('//product/:id/reviews', reviewController.postReviewId)

router.delete('/reviews/:id', reviewController.deleteReview)

module.exports = router;


// GET/product/:id/reviews - пользователь может смотреть отзывы к товару;
// POST/product/:id/reviews - пользователь может оставлять свой отзыв;
// DELETE/reviews/:id - администратор может удалять отзывы;
const { Router } = require ('express');
const commentController = require("../controllers/comments")
const router = Router()

router.get("/products")
router.get("/categories/:id/products")
router.get("/brands/:id/products")

router.post("/products")

router.delete("/product/:id")

router.patch("/products/:id")


/*

GET/products - пользователь может смотреть весь список товаров;
GET/categories - пользователь может смотреть список категорий;
GET/categories/:id/products - пользователь может смотреть товары из определенной категории;
GET/brands/:id/products - пользователь может смотреть товары определенного бренда;
GET/product/:id/reviews - пользователь может смотреть отзывы к товару;

POST/product/:id/reviews - пользователь может оставлять свой отзыв;
POST/reviews - пользователь может оставлять свой отзыв;
POST/cart/:id/product - пользователь может добавить товар в корзину;
POST/categories - администратор может добавлять категории;
POST/products - администратор может добавлять новые товары;
POST/brands - администратор может добавить бренд;

DELETE/categories/:id - администратор может удалять категории;
DELETE/product/:id - администратор может удалять товары;
DELETE/reviews/:id - администратор может удалять отзывы;
DELETE/brands/:id - администратор может удалить бренд;
DELETE/cart/:id/product - пользователь может удалить товар из корзины;

PATCH/categories/:id - администратор может изменять категории;
PATCH/products/:id - администратор может изменять существующие товары;
PATCH/brands/:id - администратор может изменить бренд;
 */
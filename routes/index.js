const express = require('express');
const router = express.Router();

// middlewares
const apiAuth = require('./middleware/apiAuth');

// Controllers
const { controller } = config.path.app;
const AuthController = require(`${controller}/AuthController`);
const BookController = require(`${controller}/BookController`);

// authentication
router.post('/login' , AuthController.login.bind(AuthController));
router.post('/register' , AuthController.register.bind(AuthController));

// Index
router.get('/' , apiAuth, BookController.index.bind(BookController));

// Add a book
router.post('/book' , apiAuth, BookController.add.bind(BookController));



module.exports = router;

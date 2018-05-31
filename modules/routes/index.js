const express = require('express');
const router = express.Router();

// middlewares
const apiAuth = require('./middleware/apiAuth');

// Controllers
const { controller } = config.path.app;
const AuthController = require(`${controller}/AuthController`);
const BookController = require(`${controller}/BookController`);
const UserController = require(`${controller}/UserController`);

// authentication
router.post('/login' , AuthController.login.bind(AuthController));
router.post('/register' , AuthController.register.bind(AuthController));

// Index
router.get('/' , apiAuth, BookController.index.bind(BookController));

// Add a book
router.post('/book' , apiAuth, BookController.add.bind(BookController));

// Update
router.post('/update/:id' , apiAuth, BookController.update.bind(BookController));

// Favourite
router.post('/favourite/:id' , apiAuth, UserController.favourite.bind(UserController));

// Reserve
router.post('/reserve/:id' , apiAuth, UserController.reserve.bind(UserController));

// Search
router.get('/search/byAuthor/:author' , apiAuth, BookController.searchByAuthor.bind(BookController));
router.get('/search/byTitle/:title' , apiAuth, BookController.searchByTitle.bind(BookController));
router.get('/search/byPublisher/:publisher' , apiAuth, BookController.searchByPublisher.bind(BookController));

module.exports = router;

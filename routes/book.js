const router = require('express').Router();
const Book = require('../model/book')

// let User = require('../models/user.model');

router.get("/books", async (req, res) => {
	// const books = await Book.find()
	res.send(books)
})

module.exports = router
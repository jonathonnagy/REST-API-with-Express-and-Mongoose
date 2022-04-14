const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
	title: String,
	length: Number,
	year: Number
})

module.exports = mongoose.model("Book", bookSchema)
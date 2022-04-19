const router = require('express').Router();
const User = require('../model/user')

router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
})

module.exports = router
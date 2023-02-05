const {
	CustomAPIError,
	BadRequestError,
} = require("../errors/custom-error")
const jwt = require("jsonwebtoken")
const login = async (req, res) => {
	const { username, password } = req.body
	/*
        if the user or password is not provided
        1- using mongoose  => schma check 
        2- joi package
        3- here in controllers
    */
	if (!username || !password) {
		throw new BadRequestError("you must provide a username and password")
	}
	console.log("as")
	const id = new Date().getDate()
	const token = jwt.sign(
		{ id, username },
		process.env.JWT_SECRET,
		{ expiresIn: "30d" }
	)
	res.status(200).json({ msg: `user created`, token })
}
const dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100)
	res
		.status(200)
		.json({
			msg: `hello. ${req.user.username}`,
			secret: `here is your authorized data your lucky number is ${luckyNumber}`,
		})
}

module.exports = {
	login,
	dashboard,
}

const jwt = require("jsonwebtoken")
const {
	CustomAPIError,
	UnauthorizedError,
} = require("../errors/custom-error")

const authenticationMiddleware = async (req, res, next) => {
	const authHeader = req.headers.authorization
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		throw new Unauthorized("No token provided")
	}

	try {
		const token = authHeader.split(" ")[1]
		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET
		)
		const { username, id } = decoded
		req.user = { id, username }
        console.log(req.user)
		next()
	} catch (err) {
		throw new UnauthorizedError(
			"not authorized to access this route"
		)
	}
}

module.exports = authenticationMiddleware

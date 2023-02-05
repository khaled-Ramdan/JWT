const { StatusCodes } = require("http-status-codes")

class CustomAPIError extends Error {
	constructor(message, statusCode) {
		super(message)
		this.statusCode = statusCode
	}
}

class BadRequestError extends CustomAPIError {
	constructor(message, statusCode) {
		super(message, StatusCodes.BAD_REQUEST)
	}
}

class UnauthorizedError extends CustomAPIError {
	constructor(message, statusCode) {
		super(message, StatusCodes.UNAUTHORIZED)
	}
}

class UnauthenticatedError extends CustomAPIError {
	constructor(message, statusCode) {
		super(message, StatusCodes.UNAUTHORIZED)
	}
}

module.exports = {
	CustomAPIError,
	BadRequestError,
	UnauthorizedError,
	UnauthenticatedError,
}

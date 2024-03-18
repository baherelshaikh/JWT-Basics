const CustomAPIError = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes') // to write text instead of numbers

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')

const authenticationMiddleware = async (req,res,next)=>{
    const Authorization = req.headers.authorization ;
    if (!Authorization || !Authorization.startsWith('Bearer ')){
        throw new UnauthenticatedError('No taken provided')// authentication error 
    }
    const token = Authorization.split(' ')[1]

    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const {username, password} = decode
        req.user = {username, password}
        next()
    } catch (error){
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}

module.exports = {authenticationMiddleware}
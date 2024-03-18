const {BadRequestError} = require('../errors')
const jwt = require('jsonwebtoken')
// require('dotenv').config()
const login = async (req,res)=>{
    const {username, password} = req.body

    //validation in the controller
    if (!username || !password){
        throw new BadRequestError('Please provide username and password') // Bad request
    }
                            //paload            JWT secret              options
    const token = jwt.sign({username, password},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req, res)=>{
    res.status(200).json({msg : `Hello, ${req.user.username}`, secret: `${req.user.password}`})
}

module.exports={login, dashboard}
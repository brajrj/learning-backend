const jwt = require('jsonwebtoken');
const dotenv=require('dotenv').config();

const jwtAuthmiddleware = (req, res, next) => {

    const authorization = req.headers.authorization;

    if(!authorization){
        return res.status(401).json({error:"Token not found"})
    }

    const token = req.headers.authorization.split(" ")[1];

    if(!token){
        return res.status(401).json({error:"Unauthrized"});
    };

    try {
        
        const decoded = jwt.verify(token , process.env.JWT_SECRET);

        req.userToken = decoded;

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({error:"Invalid token"})
        
    }

};


const generateToken = (userData) => {
    return jwt.sign(userData , process.env.JWT_SECRET);
}


module.exports = {jwtAuthmiddleware , generateToken}

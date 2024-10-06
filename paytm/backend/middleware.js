const JWT_SECRET = require('./config')
const jwt = require('jsonwebtoken')
function authMiddleware(req,res,next){
    if(! req.headers.authorization){
        return res.status(403);
    }
    const token = req.headers.authorization.split(' ')[1];

    try{
        const decodedToken = jwt.verify(token,JWT_SECRET);
        console.log(decodedToken.userId)
        req.headers.userId = decodedToken.userId
        next();
    }
    catch(err){
        res.json({message: "Some error while verifying the Authentication Token",status:false})
    }

}

module.exports={
    authMiddleware
}
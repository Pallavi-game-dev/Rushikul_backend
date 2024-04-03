const jwt = require('jsonwebtoken');
const JWT_CONST = "Rushikul $ is $ Good"
const validuser = (req,res,next)=>{
    // get user from the jwt token
    const token = req.header('auth-token');
    console.log("token 1",token);
    if(!token){
        res.status(401).send({error:"User is not authenticated - Invalid user"})
    }
    try {
        const data = jwt.verify(token,JWT_CONST);
        req.user = data.user;
        console.log("token 2",req.user);
        next()
    } catch (error) {
        console.log("error",error);
        res.status(401).send({error:"User is not authenticated - Invalid user"})
    }
    
}
module.exports = validuser;
const jwt = require('jsonwebtoken');
const JWT_CONST = "Rushikul $ is $ Good"
const validuser = (req,res,next)=>{
    // get user from the jwt token
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"User is not authenticated - Invalid user"})
    }
    try {
        const data = jwt.verify(token,JWT_CONST);
        req.user = data.user;
        next()
    } catch (error) {
        console.log("error",error);
        res.status(401).send({error:"User is not authenticated - Invalid user"})
    }
    
}
module.exports = validuser;
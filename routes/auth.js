const express = require('express');
const router = express.Router();
const AuthSchema = require('../models/AuthSchema');
const {body,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');




   // adding new user
   router.post('/createuser',[
        body('user','UserName is invalid').isEmail(),
        body('password','Password is required').isString()
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try {
        let user = await AuthSchema.findOne({user:req.body.user});
        if(user){
            return res.status(400).json({error:"User Already Exits"});
        }
        const salt = bcrypt.genSaltSync(10);
        const SecPass = bcrypt.hashSync("req.body.password", salt);
        user  = await AuthSchema.create({
            user :req.body.user,
            password :SecPass,
        });
        res.json(user)
    } catch (error) {
        console.log("error",error.message)
        res.status(500).send("Some wents wrong")
    }   
})

module.exports = router;
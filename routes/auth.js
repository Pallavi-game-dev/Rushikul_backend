const express = require('express');
const router = express.Router();
const AuthSchema = require('../models/AuthSchema');
const {body,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_CONST = "Rushikul $ is $ Good"
const validuser = require('../middleware/validuser')


   // adding new user   .... no authentication required
   router.post('/createuser',[
        body('user','UserName is invalid').isEmail(),
        body('password','Password is required').isString()
        ],async (req,res)=>{
            //validation check
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        // adding data to database
        try {
            let user = await AuthSchema.findOne({user:req.body.user});
            if(user){
                return res.status(400).json({error:"User Already Exits"});
            }

            const salt = bcrypt.genSaltSync(10);
            const SecPass = bcrypt.hashSync(req.body.password, salt);

            user  = await AuthSchema.create({
                user :req.body.user,
                password :SecPass,
            });
            const data = {
                user:{
                    id:user.id
                }
            }
            const authToken = jwt.sign(data,JWT_CONST)
            res.json({authToken})
        } catch (error) {
            console.log("error",error.message)
            res.status(500).send("Inter Server Error")
        }   
    })

    // authentic user  .... no authentication required
    router.post('/login', [
        body('user', 'UserName is invalid').isEmail(),
        body('password', 'Password is required').exists()
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const { user, password } = req.body;
    
        try {
            let userRecord = await AuthSchema.findOne({ user });
            if (!userRecord) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
            // Compare passwords
            const passwordCompare = await bcrypt.compare(password, userRecord.password);
           
    
            if (!passwordCompare) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
    
            // Passwords match, generate JWT token
            const data = {
                user: {
                    id: userRecord.id
                }
            };
            const authToken = jwt.sign(data, JWT_CONST);
            res.json({ authToken });
        } catch (error) {
            console.error("Error:", error.message);
            res.status(500).send("Internal Server Error");
        }
    });

    router.post('/getuser',validuser,async(req,res)=>{
        try {
            const userId = req.user.id;
            const user = await AuthSchema.findById(userId).select("-password")
            res.send(user)
        } catch (error) {
            console.error("Error:", error.message);
            res.status(500).send("Internal Server Error");
        }
    })
    

module.exports = router;
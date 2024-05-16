const express = require('express');
const router = express.Router();
const agentSchema = require('../models/AgentsSchema');


router.post('/createagent',[
    body('fname',"First Name is invalid").isLength({min:3}).isString(),
    body('lname',"Last Name is invalid").isLength({min:3}).isString(),
    body('mobile',"Mobile is invalid").isLength({min:10,max:10}).isNumeric(),
    body('email','Email is invalid').isEmail(),
    body('gender','Gender is invalid').isString(),
    body('addharnumber','Aadhar number is invalid').isNumeric(),
    body('pancard','Pancard number is invalid'),

],async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
   
    try {
        let agent = await agentSchema.findOne({addharnumber:req.body.addharnumber});
        console.log( "*****************************8",agent);
        if(agent){
            return res.status(400).json({error:"Addhar Number Already Exits"});
        }
        agent  = await agentSchema.create({
            fname:req.body.fname,
            lname:req.body.lname,
            mobile:req.body.mobile,
            email:req.body.email,
            gender:req.body.gender,
            addharnumber:req.body.addharnumber,
            pancard:req.body.pancard,
        });
        res.json(agent)
    } catch (error) {
        res.status(500).send("Some wents wrong")
    }
   

});


// Get All agent 
router.get('/getcustomer',async(req,res)=>{
    try {
        const agent = await agentSchema.find();
        res.json(agent);
    } catch (error) {
        console.log(error);
        res.status(500).send("Some wents wrong")
    }
});
const express = require('express');
const router = express.Router();
const CustomerSchema = require('../models/CustomerSchema');
const {body,validationResult} = require('express-validator')


// adding new customer
router.post('/createcustomer',[
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
            let customer = await CustomerSchema.findOne({addharnumber:req.body.addharnumber});
            console.log( "*****************************8",customer);
            if(customer){
                return res.status(400).json({error:"Addhar Number Already Exits"});
            }
            customer  = await CustomerSchema.create({
                fname:req.body.fname,
                lname:req.body.lname,
                mobile:req.body.mobile,
                email:req.body.email,
                gender:req.body.gender,
                addharnumber:req.body.addharnumber,
                pancard:req.body.pancard,
            });
            res.json(customer)
        } catch (error) {
            res.status(500).send("Some wents wrong")
        }
       
    
    })

module.exports = router;
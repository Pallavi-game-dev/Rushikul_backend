import express from 'express'
const router = express.Router()
import CustomerSchema from '../models/CustomerSchema.js'
import { body, validationResult } from 'express-validator'


// adding new customer
router.post('/createcustomer', [
    body('fname', "First Name is invalid").isLength({ min: 3 }).isString(),
    body('lname', "Last Name is invalid").isLength({ min: 3 }).isString(),
    body('mobile', "Mobile is invalid").isLength({ min: 10, max: 10 }).isNumeric(),
    body('email', 'Email is invalid').isEmail(),
    body('gender', 'Gender is invalid').isString(),
    body('addharnumber', 'Aadhar number is invalid').isNumeric(),
    body('pancard', 'Pancard number is invalid'),

], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        let customer = await CustomerSchema.findOne({ addharnumber: req.body.addharnumber });
        if (customer) {
            return res.status(400).json({ error: "Addhar Number Already Exits" });
        }
        customer = await CustomerSchema.create({
            fname: req.body.fname,
            lname: req.body.lname,
            mobile: req.body.mobile,
            email: req.body.email,
            gender: req.body.gender,
            addharnumber: req.body.addharnumber,
            pancard: req.body.pancard,
            branch_id: req.body.branch_id,
            user_id: req.body.user_id,
            address: req.body.address
        });
        res.json(customer)
    } catch (error) {
        console.log("error", error);
        res.status(500).send("Some wents wrong")
    }


});


// Get All customer 
router.get('/getcustomer', async (req, res) => {
    try {
        const customer = await CustomerSchema.find();
        res.json(customer);
    } catch (error) {
        console.log(error);
        res.status(500).send("Something wents wrong")
    }
});
export default router;
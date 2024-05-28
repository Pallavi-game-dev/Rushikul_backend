import express from 'express'
const router =express.Router()
import branchSchema from '../models/branchSchema.js'

router.get('/getbranchList',async(req,res)=>{
    try{
        let data = await branchSchema.find()
        res.json(data)

    }catch{
        console.log(error);
        res.status(500).send("Something wents wrong")
    }
})

router.post('/createbranch',async(req,res)=>{
    try {
        let branch = await branchSchema.create({
            branch_name :req.body.branch_name,
            branch_address:req.body.branch_address
        });
        res.send(branch);
              
    } catch (error) {
        console.log(error);
        res.status(500).send("Something wents wrong")
    }
})

export default router;
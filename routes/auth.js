const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obje = {
        name:'pallavi',
        number:34
    }
    res.json(obje)
})

module.exports = router;
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
       fname:{
        type: String,
        required:true,
       },
       lname:{
        type: String,
        required:true,
       },
       mobile:{
        type: Number,
        required:true,
       },
       email:{
        type: String,
        required:true,
       },

       gender:{
        type: String,
        required:true,
       },
       addharnumber:{
        type: Number,
        required:true,
        unique:true
       },
       pancard:{
        type: String,
        required:true,
       },
});
const Customer = mongoose.model('customer',CustomerSchema);
module.exports = Customer
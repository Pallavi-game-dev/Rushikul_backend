const mongoose = require('mongoose');
const AgentsSchema = new mongoose.Schema({
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
        type: {
              name:Str
        },
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
},{
       timestamps:true
});
export default mongoose.model('customer',AgentsSchema);
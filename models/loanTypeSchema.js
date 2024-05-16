import  { Schema, model } from 'mongoose';
const loanTypeSchema = new Schema({
    loan_type:{
        type: String,
        required:true,
    },



},{
    timestamps:true
});
const loanType = model('loan_type',loanTypeSchema);
export default loanType;
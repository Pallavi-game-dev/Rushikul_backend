import { Schema, model } from 'mongoose';
const loanSchema = new Schema({
    acoount_number:{
        type:mongoose.Schema.Types.acoount_number,
        ref:'account',
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer',
        required:true,
    },
    loan_type:{
        type:mongoose.Schema.Types.loan_type,
        ref:'loan_type',
        required:true,
    },
    amount:{
        type: Number,
        required:true,
    },
    intrest_rate:{
        type: Number,
        required:true,
    },
    loan_duration:{
        type:Number,
        required:true,
    },
    start_date:{
        type:Date,
        required:true,
    },
    end_date:{
        type:Date,
        required:true,
    },
    payment_frequency:{ //  Indicates how often payments are due (e.g., monthly, quarterly).
        type: String,
        required:true,
    },
    emi_amount:{ 
        type: Number,
        required:true,
    },
    remaining_balance:{ 
        type: Number,
        required:true,
    },
    loan_status:{
        type: String,
        required:true,
    },
    grace_period:{
        type: Number,
     
    },
    late_payment_penalty:{
        type: Number,
       
    },
    pre_payment_penalty:{
        type: Number,
      
    },
    processing_fee:{
        type: Number,
       
    },
    comment:{
        type: String,
    },


},{
    timestamps:true
});
const loan = model('loan',loanSchema);
export default loan;
import mongoose, { Mongoose,model,Schema } from "mongoose";

const accountSchema = new Schema({
    account_number :{
        type:Number,
        unique:true,
        required:true  
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer',
        required:true,
    },
    balance:{
        type:Number,
        required:true,
        required:true,
    },
    branch_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'branch',
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
    },
    account_type:{
        type:String,
        required:true,

    },
    deposit_amount:{
        type:Number,
        required:true,
    }
},{
    timestamps:true
})

const account= model('account',accountSchema)
export default account;
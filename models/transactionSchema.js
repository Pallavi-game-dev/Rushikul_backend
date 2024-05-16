import { Schema, model } from 'mongoose';
const transactionSchema = new Schema({
    acoount_number:{
        type: Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer',
        required:true,
    },
    type:{
        type: String,
        required:true,
    },
    amount:{
        type: Number,
        required:true,
    },
    balance:{
        type: Number,
        required:true,
    },
    deposit_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'deposit',
        required:true,
    },
    loan_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'loan',
        required:true,
    },
    comment:{
        type: String,
        required:true,
    },


},{
    timestamps:true
});
const transaction = model('transaction',transactionSchema);
export default transaction;
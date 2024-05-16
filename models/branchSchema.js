import { Schema, model } from 'mongoose';
const branchSchema = new Schema({
    branch_name:{
        type: String,
        required:true,
    },
    branch_addresss:{
        type: String,
        required:true,
    },



},{
    timestamps:true
});
const branch = model('branch',branchSchema);
export default branch;
import  { Schema, model } from 'mongoose';
const depositetypeSchema = new Schema({
    deposite_type:{
        type: String,
        required:true,
    },



},{
    timestamps:true
});
const deposite_type = model('deposite_type',depositetypeSchema);
export default deposite_type;
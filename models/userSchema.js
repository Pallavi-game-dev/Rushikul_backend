import  mongoose, { Mongoose, Schema, model } from 'mongoose';

const userSchema = new Schema({
   
    role_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'role',
        required:true,
    },
    name:{
        type:string,
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
        unique:true
    },

},{
    timestamps:true
})
const user = model('user',userSchema);
export default user;


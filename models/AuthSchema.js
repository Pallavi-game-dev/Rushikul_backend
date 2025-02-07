import mongoose from "mongoose";
const AuthSchema = new mongoose.Schema({
  
    user:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    }

});
const auth = mongoose.model('auth',AuthSchema);
export default auth
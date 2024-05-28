import mongoose,{ Schema, model } from 'mongoose';

const customerSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,

  },
  gender: {
    type: String,
    required: true,
  },
  addharnumber: {
    type: Number,
    required: true,
    unique: true,
  },
  pancard: {
    type: String,
    required: true,
  },
  branch_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "branch",
    required:true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:true,
  },
//   documents: {
//     type:[ {
//       name: String,
//       url: String,
//       status:String
//     }],
//     required: true,
//   },
},{
  timestamps:true
});
const branch = model('customer',customerSchema);
export default branch;

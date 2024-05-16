const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
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
    required: true,
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
  documents: {
    type:[ {
      name: String,
      url: String,
      status:String
    }],
    required: true,
  },
});
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;

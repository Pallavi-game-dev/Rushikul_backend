import mongoose, { Mongoose,model,Schema } from "mongoose";

const pendingReqSchema = new Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer'
    },
 
    status:{
        type:Boolean,
    },
    old_data:{
            fname: {
                type: String,
               
              },
              lname: {
                type: String,
               
              },
              mobile: {
                type: Number,
               
              },
              email: {
                type: String,
               
              },
              address: {
                type: String,
               
              },
              gender: {
                type: String,
               
              },
              addharnumber: {
                type: Number,
              },
              pancard: {
                type: String,
               
              },
              branch: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "branch",
              },
              user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
              },
              documents: {
                type: {
                  name: String,
                  url: String,
                },
               
              },
    },
    new_data:[
            {
                fname:String,
                isApproved:Boolean
            },
            {
                lname:String,
                isApproved:Boolean
            },
            {
                mobile:String,
                isApproved:Boolean
            },
            {
                email:String,
                isApproved:Boolean
            },
            {
                address:String,
                isApproved:Boolean
            },
            {
                gender:String,
                isApproved:Boolean
            },
            {
                addharnumber:String,
                isApproved:Boolean
            },
            {
                pancard:String,
                isApproved:Boolean
            },
           
            {
                branch:String,
                isApproved:Boolean
            },
           
            {
                pancard:String,
                isApproved:Boolean
            },
            {
                user:String,
                isApproved:Boolean
            },
            {
                documents:String,
                isApproved:Boolean
            },
           
        ]
    
});


const pendingReq= model('pendingReq',pendingReqSchema)
export default pendingReq;
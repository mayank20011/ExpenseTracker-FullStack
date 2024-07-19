import mongoose from "mongoose";
const {Schema}= mongoose;
const TransactionSchema=new Schema(
  {
     text:
     {
      type:String,
      trim:true,
      required:[true, "Please Add Some Text"]
     },
     amount:
     {
      type:Number,
      required:[true, "Please Enter a Positive or Negative Number"]
     },
     createdAt:
     {
        type:Date,
        default:Date.now
     }
  });

export default TransactionSchema; 
import mongoose from "mongoose";
import companyModel from "./companyModel.js";

const adminSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,default:"admin"},
    termsAndCondition:{type:Boolean,required:true},
    verificationCode:{type:Number},
    verified:{type:Boolean,default:false},
    companyId:{type:mongoose.Schema.Types.ObjectId,ref:'Company'}
},{timestamps:true})


const adminModel = mongoose.models.Admin || mongoose.model('Admin',adminSchema);

export default adminModel;



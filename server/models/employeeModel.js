import mongoose from 'mongoose';

// Employee Registration:
// name:
// email:
// password:
// active:true/false
// role:
// accessControl:[]
// companyId: id

const employeeSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    active:{type:Boolean,default:true,required:true},
    role:{type:String,enum:["admin","warehouse_manager","inventory_staff","delivery_manager","vendor","customer_support"]},
    accessControl:[{type:String,required:true}],
    companyId:{type:mongoose.Schema.Types.ObjectId,ref:'Company'}
},{timestamps:true});

const employeeModel = mongoose.models.Employee || mongoose.model("Employee",employeeSchema);

export default employeeModel;

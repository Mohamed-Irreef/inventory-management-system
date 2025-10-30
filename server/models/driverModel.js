import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true},
    accessControl:[{type:String,required:true}],
    companyId:{type:mongoose.Schema.Types.ObjectId,ref:'Company'},

    hasOrder:{type:Boolean,default:false},
    orders:[{type:mongoose.Schema.Types.ObjectId,ref:'Orders'}],
    active:{type:String,default:false},
},{timestamps:true})

const driverModel = mongoose.models.Drivers || mongoose.model('Drivers',driverSchema);

export default driverModel;
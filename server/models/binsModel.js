import mongoose from 'mongoose';

const binsSchema = new mongoose.Schema({
    skuId:{type:String,required:[true,"Sku Id is required"]},
    productName:{type:String,required:[true,"Product Name is required"]},
    addr:{type:String,required:[true,"Product addr is required"]},
    zone:{type:String,enum:{values:["REC","STO","PICK","PACK","COLD","RET"],message:`{value} is not valid`},required:true},
    aisle:{type:String,enum:{values:["A1","A2","A3"],message:`{value} is not valid`},required:true},
    rack:{type:String,enum:{values:["R1","R2","R3"],message:`{value} is not valid`},required:true},
    bin:{type:String,enum:{values:["B1","B2","B3","B4"],message:`{value} is not valid`},required:true},
    status:{type:String,enum:{values:["partial","full","empty"],message:`{value} is not valid`}},
    stockStatus:{type:String,enum:['in-stock','out-of-stock','low-stock']},
    haveProduct:{type:Boolean,default:false,required:true},
    qty:{type:Number,required:true},
    capacity:{type:Number,required:true},

    vendorId:{type:mongoose.Schema.Types.ObjectId,ref:"Vendors"},
    companyId:{type:mongoose.Schema.Types.ObjectId,ref:"Company"},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Products"},
},{timestamps:true})

const binsModel = mongoose.models.Map || mongoose.model("Map",binsSchema);

export default binsModel;
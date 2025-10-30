import mongoose from 'mongoose';
// VendorRegistration:
// vendor id:
// vendor:company name
// vendor name:
// vendor email:
// password
// vendor contact:
// vendor addr:
// rating:
// vendor Prod category:
// vendor status:active/inactive
// orders:[{order}]
// companyId:(our stockflow)

const vendorSchema = new mongoose.Schema({
    vendorCompanyID:{type:String,required:true,unique:true},
    vendorCompanyName:{type:String,required:true},
    vendorContact:{type:Number,required:true},
    vendorAddress:{type:String,required:true},
    vendorRating:{type:Number,default:0}, // not during registration
    vendorProductCategory:{type:String,required:true},
    vendorStatus:{type:Boolean,default:true}, //active or inactive
    // orders:[]
    orders:[{type:Object}],
    name:{type:String,required:true},
    email:{type:String,required:true},
    role:{type:String,required:true,default:"vendor"},
    password:{type:String,required:true},
    companyId:{type:mongoose.Schema.Types.ObjectId,ref:'Company'}
},{timestamps:true});

const vendorModel = mongoose.models.Vendors || mongoose.model('Vendors',vendorSchema);

export default vendorModel;
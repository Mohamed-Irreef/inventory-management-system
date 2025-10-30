import mongoose from "mongoose";
import adminModel from "./adminModel.js";

// Company Registration:

// company name
// email
// phone number
// address
// gst number
// reg number
// business type
// year 
// total-space
// warehouse-count
// goods-type
// operational status
// company contact name:
// designation
// mobile
// alternate-email

// ProductList:[inventoryProduct ID]
// EmployeeList:[employeeId]
// VendorsList:[vendorId]
// customerList:[customer Id]
// adminId: Admin id

const companySchema = new mongoose.Schema({
    companyName:{type:String,required:true},
    companyEmail:{type:String,required:true},
    companyContact:{type:Number,required:true},
    companyAddress:{type:String,required:true},
    companyGst:{type:String,required:true},
    companyReg:{type:String,required:true},
    companyType:{type:String,required:true},
    companyYrEstb:{type:Number,required:true},
    companySpace:{type:String,required:true},
    companyWarehouseCount:{type:Number,required:true},
    compnayGoodsType:{type:String,required:true},
    companyOperationalStates:{type:String,required:true},
    companyContactName:{type:String,required:true},
    companyDesignation:{type:String,required:true},
    companyPrimaryPhone:{type:Number,required:true},
    companyAlternateEmail:{type:String,required:true},
    companyAdminId:{type:mongoose.Schema.Types.ObjectId,ref:'Admin'},

    employeeIdList:[{type:mongoose.Schema.Types.ObjectId,ref:"Employee"}],
    vendorsIdList:[{type:mongoose.Schema.Types.ObjectId,ref:"Vendors"}],
    ordersIdList:[{type:mongoose.Schema.Types.ObjectId,ref:"Vendors"}],

    employeeList:[{type:Object}],
    vendorsList:[{type:Object}],
    ordersList:[{type:Object}],


},{timestamps:true});

const companyModel = mongoose.models.Company || mongoose.model('Company',companySchema);

export default companyModel;
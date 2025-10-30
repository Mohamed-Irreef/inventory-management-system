import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    orderId:{type:String,required:[true,"Order Id is required"]}, //during register (auto)
    skuId:{type:String,required:[true,"Sku Id is required"]}, //during register
    vendorId:{type:mongoose.Schema.Types.ObjectId,ref:"Vendors"},
    productName:{type:String,required:[true,"Product Name is required"]}, //during register (auto)
    orderQty:{type:Number,required:[true,"Order Qty is required"]}, //during register
    paidStatus:{type:Boolean,required:[true,"Paid status is required"]}, //during register
    paidValue:{type:Number,required:[true,"Paid value is required"]}, //during register

    customerName:{type:String,required:[true,"Customer name is required"]}, //during register
    customerEmail:{type:String,required:[true,"Customer email is required"]}, //during register
    customerContact:{type:Number,required:[true,"Customer contact is required"]}, //during register
    customerAddress:{type:String,required:[true,"Customer address is required"]}, //during register

    prodStorageBinId:{type:mongoose.Schema.Types.ObjectId,ref:"Map",required:[true,"Product Storage Bin is required"]}, //during register (auto)
    prodStorageBin:{type:String},
    trackBin:{type:String}, //during register
    trackBinId:{type:mongoose.Schema.Types.ObjectId,ref:"Map"}, //during order status update (auto)
    orderStatus:{type:String,enum:{values:["processing","picked","packed","in-transist","delivered"],message:`{value} is not a valid status`},default:"processing"}, //during register (auto)
    orderPlacedDate:{type:Date,default:Date.now}, //during register (auto)
    deliverDate:{type:Date,required:[true,"Deliver date is required"]}, //during register
    orderClosed:{type:Boolean,default:false},

    haveProduct:{type:Boolean,default:false},
    driver:{type:mongoose.Schema.Types.ObjectId,ref:"Drivers"}
},{timestamps:true})

const orderModel = mongoose.models.Orders || mongoose.model("Orders",orderSchema);

export default orderModel;
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    poId:{type:String,required:true}, // (during register)
    skuId:{type:String,required:true}, // (during register)
    productName:{type:String,required:true}, // (during register)
    quantity:{type:Number,required:true}, // (during register)
    companyName:{type:String,required:true}, // (during register)
    orderPlacedDate:{type:Date,default:Date.now}, // (during register)
    wantedDate:{type:Date,required:true}, // (during register)
    vendorId:{type:mongoose.Schema.Types.ObjectId,ref:'Vendors',required:true}, // (during register)
    companyId:{type:mongoose.Schema.Types.ObjectId,ref:'Company',required:true}, // (during register)

    isOrderRejected:{type:Boolean,default:false}, //[during vendor response]
    perPieceRate:{type:Number}, //[during vendor response]
    totalRate:{type:Number}, //[during vendor response]
    date:{type:Date}, //also make it as string //[during vendor response]
    eta:{type:Number}, //also make it as string
    orderAccepted:{type:Boolean,default:false},//[during vendor response]

    arrivalStatus:{type:String,enum:["pending","processing","in-transist","arrived","delayed","cancelled","returned"],default:"pending"}, //[during vendor response]
    qualityIssues:{type:Boolean,default:false},
    inventoryAccepted:{type:Boolean,default:false},
    productReturned:{type:Boolean,default:false},
    orderCancelled:{type:Boolean,default:false},
    cancellationReason:{type:String},
    returnReason:{type:String}, 

    balanceTracker:{type:Number},

    binLocation:{type:mongoose.Schema.Types.ObjectId,ref:"Map"}, 
    stock:{type:String,enum:["in-stock","low-stock","out-of-stock"]},

    minimumStock:{type:Number,default:5}, // (during register)
    maximumStock:{type:Number,default:25}, // (during register)
    binMaxCount:{type:Number,default:25}, // (during register)
    reorderStatus:{type:Boolean,default:false}, // (during register)
    reordered:{type:Boolean,default:false}//during reorder

},{timestamps:true})

const productModel = mongoose.models.Products || mongoose.model("Products",productSchema);

export default productModel;
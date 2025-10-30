import vendorModel from "../models/vendorModel.js"
import productModel from "../models/productModel.js"
import companyModel from "../models/companyModel.js";

import binsModel from "../models/binsModel.js";

export const orderRegister = async (req,res)=>{
    try {
        // poId,skuId will be generated automatically and orderPlacedDate & company name will be assigned automatically
        var {productName,quantity,vendorId,companyId,wantedDate,minimumStock,maximumStock,binMaxCount,reorderStatus}=req.body;
        if(!productName||!quantity||!vendorId||!companyId||!wantedDate||!minimumStock||!maximumStock||!binMaxCount||!reorderStatus){
            return res.status(400).json({status:false,message:"Missing Details"});
        }
        const vendorExist = await vendorModel.findOne({vendorCompanyID:vendorId});
        if(!vendorExist){
            return res.status(400).json({status:false,message:"Vendor Not exist"});
        }
        vendorId=vendorExist._id;
        

        // stockflow company name assigning
        const companyDetails = await companyModel.findOne({_id:companyId});
        const companyName=companyDetails.companyName;

        

        // skuId generation
        const productNameArray = productName.split(' ');
        var skuId =`SKU-`;
        var skuIdRandNum = Math.floor(Math.random()*1000)
        for(var i =0;i<productNameArray.length;i++){
            skuId+=productNameArray[i].charAt(0).toUpperCase();
        }
        skuId=skuId+skuIdRandNum.toString();
        
        // poId generation
        const d = new Date();
        const year = d.getFullYear();
        const month = (d.getMonth() +1);
        const date = d.getDate();
        const time=d.getTime();
         var poIdRandNum = Math.floor(Math.random()*1000)
        var poId =`PO-${year}-${month}-${date}-${poIdRandNum}`;

        // order placeDate assigning
        const orderPlacedDate = `${year}-${month}-${date}`

        const newVendorOrder = new productModel({poId,skuId,productName,quantity,companyName,orderPlacedDate,vendorId,companyId,wantedDate,minimumStock,maximumStock,binMaxCount,reorderStatus});
        await newVendorOrder.save();

        //pushing the new order to the orders[] array in vendor model
        vendorExist.orders.push(newVendorOrder);
        await vendorExist.save();

        // updating the vendors orders in company collection
        companyDetails.ordersIdList.push(newVendorOrder._id);
        companyDetails.ordersList.push(newVendorOrder);
        await companyDetails.save();

        return res.status(200).json({status:true,message:"Vendor Order registered successfully",vendorOrder:newVendorOrder})
        
    } catch (error) {
        return res.status(500).json({status:false,message:"Vendor Order Registration error", error:error.message})
    }

}

export const vendorResponse = async (req,res)=>{
    try {
        const {orderAccepted,perPieceRate,totalRate,date,eta,arrivalStatus,productId} =req.body;

        const isProdExist = await productModel.findById(productId);
        if(!isProdExist){
            return res.status(400).json({status:false,message:"Product not found"})
        }
        const update ={orderAccepted,perPieceRate,totalRate,date,eta,arrivalStatus}
        const updateProduct = await productModel.findByIdAndUpdate(productId,{$set:update},{new:true,runValidators:true});

        return res.status(201).json({status:true,message:"Vendor response stored",updated:isProdExist})

    } catch (error) {
        return res.status(500).json({status:false,message:"Vendor Order Response error", error:error.message})
    }
}

// Vendor update this status ("pending","processing","in-transist","arrived","delayed")
export const vendorOrderStatusUpdate =async (req,res)=>{
    try {
        const {productId,arrivalStatus}=req.body;
        const product = await productModel.findById(productId);
        if(!product){
            return res.status(400).json({status:false,message:"No product found"});
        }
        if(product.productReturned==true || product.orderCancelled==true){
            return res.status(400).json({status:false,message:"Changes won't saved, because the product is under returned or cancelled"})
        }
        const updatedProduct = await productModel.findByIdAndUpdate(productId,{$set:{arrivalStatus}},{new:true,runValidators:true});
        return res.status(201).json({status:true,message:"Vendor product order status updated"},updatedProduct)
    } catch (error) {
        return res.status(500).json({status:false,message:"Vendor product order status error", error:error.message})

    }
}
// Vendor update this status ("cancelled")
export const companyOrderStausUpdate = async (req,res)=>{
    try {
        const {productId,arrivalStatus,cancellationReason} =req.body;
        const product = await productModel.findById(productId);
        if(!product){
            return res.status(400).json({status:false,message:"No product found"});
        }
        if(product.orderCancelled==true){
            return res.status(400).json({status:false,message:"This product was cancelled already"});
        }
        if(arrivalStatus!="cancelled"){
            return res.status(400).json({status:false,message:"Ony cancellation can be processed, others won't"})
        }
        if(product.arrivalStatus=="arrived"){
            return res.status(400).json({status:false,message:"Product arrived - No cancellation"});
        }
        if(!cancellationReason){
            return res.status(400).json({status:false,message:"Cancellation reason must be mentioned"});
        }
        
        const updatedProduct = await productModel.findByIdAndUpdate(productId,{$set:{arrivalStatus,orderCancelled:true,cancellationReason}},{new:true,runValidators:true});
        return res.status(201).json({status:true,message:"Vendor product order cancelled"},updatedProduct)
    } catch (error) {
        return res.status(500).json({status:false,message:"Vendor product order cancellation error", error:error.message})
    }
}

// vendor prod moving to receiving bin
export const receivingBin = async  (req,res)=>{
    try {
        const {productId,zone,aisle,rack,bin} = req.body;
        const product = await productModel.findById(productId);
        if(!product){
            return res.status(400).json({status:false,message:"No product found"});
        }
        if(product.inventoryAccepted==true){
            return res.status(400).json({status:false,message:"This product is already moved to storage area"});
        }
        // "PICK-A1-R1-B1"
        const binStatusPercentage=((product.qty)/(product.binMaxCount))*100;
        var binStatus ="";
        if(binStatusPercentage==100){
            binStatus ="full"
        }else if(binStatusPercentage==0){
            binStatus ="empty"
        }else{
            binStatus ="partial"
        }
        var stockStatus="";
        if(product.quantity>product.minimumStock){
            stockStatus="in-stock";
        }else if(product.quantity<product.minimumStock){
            stockStatus="low-stock";
        }else{
            stockStatus="out-of-stock"
        }
        const binLocation={
            skuId:product.skuId,
            productName:product.productName,
            addr:`${zone}-${aisle}-${rack}-${bin}`,
            zone:`${zone}`,
            aisle:`${aisle}`,
            rack:`${rack}`,
            bin:`${bin}`,
            status:binStatus,
            haveProduct:true,
            qty:product.quantity,
            capacity:product.binMaxCount,
            minimumStock:product.minimumStock,
            maximumStock:product.maximumStock,
            stockStatus:stockStatus,
            productId:productId,
            vendorId:product.vendorId,
            companyId:product.companyId
        }
        const newBinModel = new binsModel(binLocation);
        // await newBinModel.save();
        const savedBin = await newBinModel.save();

        const prodBinLocationUpdate = await productModel.findByIdAndUpdate(productId,{$set:{binLocation: savedBin._id,reordered:false}},{new:true,runValidators:true});

        // creating receiving bin in binsModel
        

        return res.status(201).json({
          status: true,
          message: "Vendor product moved to receiving bin",
          newBinEntry: newBinModel,
        });


    } catch (error) {
         return res.status(500).json({status:false,message:"Vendor product moving to receiving bin - error", error:error.message})
    }
}

// Vendor update this status - quality check ("returned") /succes qul check --> sto
export const qualityCheck = async (req,res)=>{
    try {
        const{qualityIssues,productReturned,returnReason,inventoryAccepted,productId, zone,aisle,rack,bin}=req.body;
        const product = await productModel.findById(productId);
        if(!product){
            return res.status(400).json({status:false,message:"No product found"});
        }
        
        
        // if quality issues, this if condition will run
        if(qualityIssues==true && productReturned==true && inventoryAccepted==false && returnReason!=""){
            if(!returnReason){
                return res.status(400).json({status:false,message:"Return reason should mention"})
            }
           const updateProductModel = await productModel.findByIdAndUpdate(productId,{$set:{qualityIssues,productReturned,returnReason,inventoryAccepted,arrivalStatus:"returned"}},{new:true,runValidators:true});
            const deleteBinFormReceiving = await binsModel.findByIdAndDelete(product.binLocation);

            return res.status(201).json({status:true,message:"Return status updated and received bin deleted",updatedProductModel:updateProductModel,binDeleted:deleteBinFormReceiving})
        }

        // if no quality issue then the product will move to storage (zone,rack,aisle,bin)
        // check whether this bin is already have product
        const haveAnyProductInThisBin = await binsModel.findOne({ addr:`${zone}-${aisle}-${rack}-${bin}`});
        if(haveAnyProductInThisBin){
            return res.status(400).json({status:false,message:"This bin already have a product, so add it in some other storage area"})
        }

        // updating the productModel and move to storage bin
        const updateProductModel = await productModel.findByIdAndUpdate(productId,{$set:{qualityIssues,productReturned,inventoryAccepted}},{new:true,runValidators:true});
        const updatedBin = await binsModel.findByIdAndUpdate(product.binLocation,{$set:{zone,aisle,rack,bin, addr:`${zone}-${aisle}-${rack}-${bin}`}},{new:true,runValidators:true})

        return res.status(201).json({status:true,message:"Updated - receiving bin to storage bin",updatedProductModel:updateProductModel,updatedBin :updatedBin })
    } catch (error) {
        return res.status(500).json({status:false,message:"Errors on Vendor quality updation or storage bin updation", error:error.message})
    }
}

// vendor reorder (auto)
export const reorderRegister = async (reorderData)=>{
    try {
        // poId,skuId will be generated automatically and orderPlacedDate & company name will be assigned automatically
        var {productName,quantity,vendorId,companyId,wantedDate,minimumStock,maximumStock,binMaxCount,reorderStatus,skuId}=reorderData;
        // if(!productName||!quantity||!vendorId||!companyId||!wantedDate||!minimumStock||!maximumStock||!binMaxCount||!reorderStatus){
        //     return res.status(400).json({status:false,message:"Missing Details"});
        // }
        const vendorExist = await vendorModel.findOne(vendorId);
        if(!vendorExist){
            return { status: false, code: 400, message: "Vendor Not exist" };
        }
        vendorId=vendorExist._id;
        

        // stockflow company name assigning
        const companyDetails = await companyModel.findOne({_id:companyId});
        const companyName=companyDetails.companyName;

        

        // skuId generation
        // const productNameArray = productName.split(' ');
        // var skuId =`SKU-`;
        // var skuIdRandNum = Math.floor(Math.random()*1000)
        // for(var i =0;i<productNameArray.length;i++){
        //     skuId+=productNameArray[i].charAt(0).toUpperCase();
        // }
        // skuId=skuId+skuIdRandNum.toString();
        
        // poId generation
        const d = new Date();
        const year = d.getFullYear();
        const month = (d.getMonth() +1);
        const date = d.getDate();
        const time=d.getTime();
         var poIdRandNum = Math.floor(Math.random()*1000)
        var poId =`PO-${year}-${month}-${date}-${poIdRandNum}`;

        // order placeDate assigning
        const orderPlacedDate = `${year}-${month}-${date}`

        const newVendorOrder = new productModel({poId,skuId,productName,quantity,companyName,orderPlacedDate,vendorId,companyId,wantedDate,minimumStock,maximumStock,binMaxCount,reorderStatus,reordered:true});
        await newVendorOrder.save();

        //pushing the new order to the orders[] array in vendor model
        vendorExist.orders.push(newVendorOrder);
        await vendorExist.save();

        // updating the vendors orders in company collection
        companyDetails.ordersIdList.push(newVendorOrder._id);
        companyDetails.ordersList.push(newVendorOrder);
        await companyDetails.save();

        return { status: true, code: 200, message: "Vendor Order registered successfully", data: newVendorOrder };        
    } catch (error) {
        return { status: false, code: 500, message: "Vendor Order Registration error", error: error.message };    }

}

export const mannualReorder = async (req, res) => {
  try {
    const { skuId, wantedDate } = req.body;
    const orizinalProduct = await productModel.findOne({ skuId });
    if (!orizinalProduct) {
      return res
        .status(400)
        .json({ status: false, message: "Product not found on this SKU ID" });
    }
    const vendorExist = await vendorModel.findOne(orizinalProduct.vendorId);
    if (!vendorExist) {
      return { status: false, code: 400, message: "Vendor Not exist" };
    }
    vendorId = vendorExist._id;

    // stockflow company name assigning
    const companyDetails = await companyModel.findOne({
      _id: orizinalProduct.companyId,
    });
    const companyName = companyDetails.companyName;

    // poId generation
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const time = d.getTime();
    var poIdRandNum = Math.floor(Math.random() * 1000);
    var poId = `PO-${year}-${month}-${date}-${poIdRandNum}`;

    // order placeDate assigning
    const orderPlacedDate = `${year}-${month}-${date}`;

    // {poId,skuId,productName,quantity,companyName,orderPlacedDate,vendorId,companyId,wantedDate,minimumStock,maximumStock,binMaxCount,reorderStatus,reordered:true}

    const reorderDetails = {
      poId,
      skuId,
      productName: orizinalProduct.productName,
      quantity: orizinalProduct.quantity,
      companyName,
      orderPlacedDate,
      vendorId,
      companyId: orizinalProduct.companyId,
      wantedDate,
      minimumStock: orizinalProduct.minimumStock,
      maximumStock: orizinalProduct.maximumStock,
      binMaxCount: orizinalProduct.binMaxCount,
      reorderStatus: orizinalProduct.reorderStatus,
    };
    const newVendorOrder = await new productModel(reorderDetails);
    await newVendorOrder.save();

    //pushing the new order to the orders[] array in vendor model
    vendorExist.orders.push(newVendorOrder);
    await vendorExist.save();

    // updating the vendors orders in company collection
    companyDetails.ordersIdList.push(newVendorOrder._id);
    companyDetails.ordersList.push(newVendorOrder);
    await companyDetails.save();

    return {
      status: true,
      code: 200,
      message: "Vendor Order registered successfully",
      data: newVendorOrder,
    };
  } catch (error) {
    return {
      status: false,
      code: 500,
      message: "Vendor Order Registration error",
      error: error.message,
    };
  }
};
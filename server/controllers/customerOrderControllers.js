import binsModel from "../models/binsModel.js";
import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";
import { orderRegister, reorderRegister } from "./vendorOrderController.js";

export const placeOrder = async (req,res)=>{
    try {
        const {skuId,orderQty,paidStatus,paidValue,customerName,customerEmail,customerContact,customerAddress, deliverDate} = req.body;

        // getting the storage bin by using the customer order's skuId
        const product = await binsModel.findOne({skuId});
        if(!product){
            return res.status(400).json({status:false,message:"This product is not found on warehouse storage"})
        }
        // getting the orizinal product from the productModel by using the productId in customer order's doc
        const orizinalProduct = await productModel.findOne(product.productId);
        if(!orizinalProduct){
            return res.status(400).json({status:false,message:"Orizinal product not found"});
        }
        // poId generation
        const d = new Date();
        const year = d.getFullYear();
        const month = (d.getMonth() +1);
        const date = d.getDate();
        const time=d.getTime();
         var poIdRandNum = Math.floor(Math.random()*1000)
        var orderId =`OI-${year}${poIdRandNum}-${month}${date}`;

        // updating the prod tracker for each customer order
        const storageProdTracker =product.qty-orderQty;

        // if qty=0 in storage bin, then return out-of-stock or reorder based on the reorder status in productModel
        var result ={};
        if(storageProdTracker<=orizinalProduct.minimumStock && orizinalProduct.reordered==false){
            // const allProductsOfSameSkuId= await productModel.find({skuId});
            // const alreadyOrdered=allProductsOfSameSkuId.filter((prod,index)=>{
            //     return (prod.arrivalStatus!="cancelled" && prod.arrivalStatus!="returned" &&  prod.arrivalStatus!="arrived")
            // })
            if(orizinalProduct.reorderStatus==true){

                // var thirtyFirstDaysMonth =[1,3,5,7,8,10,12];
                // var thirtyDaysMonth =[2,4,6,9,11];
                // var placedDate= (thirtyFirstDaysMonth.includes(month) && (date+3 )>31)?((date+3)-31):(date+3);
                // function dateAssigning(){
                //     if(thirtyFirstDaysMonth.includes(month)){

                //     }
                //     if(thirtyFirstDaysMonth.includes(month))
                // }
                // var placedDate = 

                
                const reorderDetails = {
                    productName:orizinalProduct.productName,
                    quantity:orizinalProduct.quantity,
                    vendorId:orizinalProduct.vendorId,
                    companyId:orizinalProduct.companyId,
                    wantedDate:orizinalProduct.wantedDate,
                    minimumStock:orizinalProduct.minimumStock,
                    maximumStock:orizinalProduct.maximumStock,
                    binMaxCount:orizinalProduct.binMaxCount,
                    reorderStatus:orizinalProduct.reorderStatus,
                    skuId:orizinalProduct.skuId
                }
                var result = await reorderRegister(reorderDetails);
                if(result.status==true && result.code==200){
                    // nothing
                    await productModel.findByIdAndUpdate(product.productId,{$set:{reordered:true}},{new:true,runValidators:true})
                    
                }
                // return res.status(200).json(result)
            }
        }
        if(product.qty<=0){
            const deleteOldProduct=await productModel.findOneAndDelete(orizinalProduct.poId);
            console.log("Old product delted",deleteOldProduct);
            return res.status(400).json({status:false,message:"This product is out of stock"}); 
        }
      
        if(product.qty<orderQty){
            return res.status(400).json({status:false,message:`low stock : ${product.qty-orderQty} products`})
        }
        
      
        //poI generation
        // order placeDate assigning
        const orderPlacedDate = `${year}-${month}-${date}`

        // orderId,productName,prodStorageBin,trackBin,orderStatus,orderPlacedDate

        const newOrderDetails = {
            orderId,
            skuId,
            orderQty,
            paidStatus,
            paidValue,
            customerName,
            customerEmail,
            customerContact,
            customerAddress,
            deliverDate,
            productName:product.productName,
            prodStorageBinId:product._id,
            prodStorageBin:product.addr,
            trackBin:product.addr,
            orderStatus:"processing",
            orderPlacedDate:`${year}-${month}-${date}`,
            vendorId:product.vendorId,
            // haveProduct:true,
        }
       
        const placeNewCustomerOrder = new orderModel(newOrderDetails);
        await placeNewCustomerOrder.save();

        // update status and stockStatus in storageBin
        const binStatusPercentage=((product.qty)/(orizinalProduct.binMaxCount))*100;
        var binStatus ="";
        if(binStatusPercentage==100){
            binStatus ="full"
        }else if(binStatusPercentage==0){
            binStatus ="empty"
        }else{
            binStatus ="partial"
        }
        var stockStatus="";
        if(product.qty>orizinalProduct.minimumStock){
            stockStatus="in-stock";
        }else if(product.qty<orizinalProduct.minimumStock){
            stockStatus="low-stock";
        }else{
            stockStatus="out-of-stock"
        }

        // const storageProdTracker =product.qty-orderQty;
        // if(storageProdTracker<=0){
        //     return res.status(400).json({status:false,message:"This product is out of stock"})
        // }
        const updateStorage ={
            stockStatus:stockStatus,
            status:binStatus,
            qty:storageProdTracker,
        }
        const updateStorageProductBin = await binsModel.findByIdAndUpdate(product._id,{$set:updateStorage},{new:true,runValidators:true});
        if(updateStorageProductBin.qty<=0){
            const deleteOldProduct=await productModel.findOneAndDelete(orizinalProduct.poId);
            console.log("Old product delted",deleteOldProduct);
            return res.status(400).json({status:false,message:"This product is out of stock"}); 
        }
        return res.status(201).json({status:true,message:"Customer order successful",NeCustomerOrder:placeNewCustomerOrder,updatedStorageBin:updateStorageProductBin,balance:storageProdTracker,result:result})

    } catch (error) {
        return res.status(500).json({status:false,message:"New customer order - error", error:error.message})
    }
}
import adminModel from "../models/adminModel.js";
import companyModel from "../models/companyModel.js";


export const companyRegister = async (req,res)=>{
    try {
        const {companyName,companyEmail,companyContact,companyAddress,companyGst,companyReg,companyType,companyYrEstb,companySpace,companyWarehouseCount,compnayGoodsType,companyOperationalStates,companyContactName,companyDesignation,companyPrimaryPhone,companyAlternateEmail} =req.body;
    if(!companyName||!companyEmail||!companyContact||!companyAddress||!companyGst||!companyReg||!companyType||!companyYrEstb||!companySpace||!companyWarehouseCount||!compnayGoodsType||!companyOperationalStates||!companyContactName||!companyDesignation||!companyPrimaryPhone||!companyAlternateEmail
    ){
        return res.status(400).json({status:false,message:"Missing Details"});
    }
    const companyAdmin = await adminModel.findOne({email:companyEmail});
    
    const newCompanyModel = new companyModel({companyName,companyEmail,companyContact,companyAddress,companyGst,companyReg,companyType,companyYrEstb,companySpace,companyWarehouseCount,compnayGoodsType,companyOperationalStates,companyContactName,companyDesignation,companyPrimaryPhone,companyAlternateEmail,companyAdminId:companyAdmin._id});
    
    await newCompanyModel.save();
    companyAdmin.companyId= newCompanyModel._id;
    await companyAdmin.save();
    
    return res.status(201).json({status:true,message:"Company registered successfully",company:newCompanyModel})
    } catch (error) {
        return res.status(500).json({status:false,message:"Company registration error",error});
    }
}
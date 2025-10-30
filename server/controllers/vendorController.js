import express from 'express'
import vendorModel from '../models/vendorModel.js'
import adminModel from '../models/adminModel.js';
import employeeModel from '../models/employeeModel.js';
import bcrypt from 'bcryptjs';
import companyModel from '../models/companyModel.js';

export const vendorRegister = async (req,res)=>{
    try {
        const {vendorCompanyID,vendorCompanyName,vendorContact,vendorAddress,vendorProductCategory,vendorStatus, name,email,password,companyId,role} = req.body;

        // pass companyId during empoyee registration
        if(!vendorCompanyID||!vendorCompanyName||!vendorContact||!vendorAddress||!vendorProductCategory||!vendorStatus||!name||!email||!password||!companyId||!role){
            return res.status(400).json({status:false,message:"Missing details"});
        }
        const isVendorExist = await vendorModel.findOne({email});
        const isAnotherEmployeeExist = await adminModel.findOne({email}) || await employeeModel.findOne({email});
        
        if(isVendorExist || isAnotherEmployeeExist){
            return res.status(400).json({status:false,message:"Another User Exist on this email"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newVendor = new vendorModel({vendorCompanyID,vendorCompanyName,vendorContact,vendorAddress,vendorProductCategory,vendorStatus, name,email,password:hashedPassword,companyId,role});
        await newVendor.save();
        const companyModelUpdate = await companyModel.findOne({_id:companyId});
        companyModelUpdate.vendorsIdList.push(newVendor._id);
        companyModelUpdate.vendorsList.push(newVendor);
        await companyModelUpdate.save();
        return res.status(201).json({status:true,message:"Vendor registered successfully", vendor:newVendor})

    } catch (error) {
        return res.status(500).json({status:false,message:"Vendor registration Error", error:error.message})
    }
}


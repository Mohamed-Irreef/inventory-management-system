import employeeModel from "../models/employeeModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import adminModel from "../models/adminModel.js";
import react from "react";
import vendorModel from "../models/vendorModel.js";
import companyModel from "../models/companyModel.js";


export const employeeRegister = async (req,res)=>{
    try {
        const {name,email,password,active,role,accessControl,companyId} = req.body;


    // pass companyId during empoyee registration
    if(!name||!email||!password||!active||!role||!accessControl||!companyId){
        return res.status(400).json({status:false,message:"Missing Details"});
    }
    const employeeExist = await employeeModel.findOne({email});
    const isAdminExistOnThisEmail = await adminModel.findOne({email});
    const isVendorExistOnThisEmail = await vendorModel.findOne({email});
    if(isVendorExistOnThisEmail){
        return res.status(400).json({status:false,message:'A vendor already exist on this email'})
    }
    if(isAdminExistOnThisEmail){
        return res.status(400).json({status:false,message:'An admin already exist on this email'})
    }
    if(employeeExist){
        return res.status(400).json({status:false,message:"An employee already exist"});
    }
    const hashesdPassword = await bcrypt.hash(password,10);
    const newEmployeeModel = new employeeModel({name,email,password:hashesdPassword,active,role,accessControl,companyId});
    await newEmployeeModel.save();

    const companyModelUpdate = await companyModel.findOne({_id:companyId});
    companyModelUpdate.employeeIdList.push(newEmployeeModel._id);
    companyModelUpdate.employeeList.push(newEmployeeModel);
    await companyModelUpdate.save()


    return res.status(201).json({status:true,message:"Employee regsisters successfully", employee:newEmployeeModel});
    } catch (error) {
        return res.status(500).json({status:false,message:'Employee Registration Error'});
    }
}

// login for admin,employee,and vendor
export const employeeLogin = async (req,res)=>{
    try {
        const {email,password,role} = req.body;
    if(!email||!password||!role){
        return res.status(400).json({status:false,message:"Missing details"});
    }
    const isEmployeeExist = await employeeModel.findOne({email}) || await adminModel.findOne({email}) || await vendorModel.findOne({email});
    if(!isEmployeeExist){
        return res.status(400).json({status:false,message:"Employee not registred (admin,employee,vendor)"});
    }
    if(isEmployeeExist.role!=role){
        return res.status(400).json({status:false,message:"role not matched"})
    }
    const isPwdMatched = await bcrypt.compare(password,isEmployeeExist.password);
    if(!isPwdMatched){
        return res.status(400).json({status:false,message:"password didn't match"})
    }
    
    const token = jwt.sign({id:isEmployeeExist._id,role:isEmployeeExist.role,companyId:isEmployeeExist.companyId},process.env.JWT_SECRET_KEY,{expiresIn:'1d'});

    res.cookie('token',token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // only in production
            sameSite: 'strict',
        });
    return res.status(201).json({status:true,message:"LoggedIn Successfully",companyId:isEmployeeExist.companyId});
    } catch (error) {
        return res.status(500).json({status:false,message:"Employee Login error"});
    }
}

// logout for admin,employee,vendor
export const employeeLogout = async (req,res)=>{
    try {
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // only in production
            sameSite: 'strict',
        });
        res.status(201).json({status:true,message:"Logout Successful"});
    } catch (error) {
        res.status(500).json({status:false,message:"Logout error"});
    }
}
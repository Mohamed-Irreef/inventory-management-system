import adminModel from '../models/adminModel.js'
import bcrypt from 'bcryptjs';
// Admin Registration:

// full name
// email
// password
// comfirm password
// role :admin (default)
// termsAndCondition:true/false
// verification_code:
// verified:true/false
// companyId: id

export const adminRegister = async(req,res)=>{
    try {
        const {name,email,password,role,termsAndCondition} = req.body;
        if(!name || !email || !password || !role || !termsAndCondition==true){
            return res.status(400).json({status:false,message:'Missing Details'});
        }
        const isExist = await adminModel.findOne({email});
        if(isExist){
            return res.status.json({status:400,message:'User already exist'});
        }
        const hashedPwd = await bcrypt.hash(password,10);
        const newAdminModel = new adminModel({name,email,password:hashedPwd,role,termsAndCondition});
        await newAdminModel.save();

        res.status(201).json({status:true,message:'Amdmin created successfully',admin:newAdminModel});
    } catch (error) {
        res.status(500).json({status:false,message:'Admin registration error',error})
    }
} 

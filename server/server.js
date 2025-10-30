import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './config/database.js';
import adminRouter from './routers/adminRouter.js';
import companyRouter from './routers/companyRouter.js';
import employeeRouter from './routers/employeeRouter.js';
import vendorRouter from './routers/vendorRouter.js';
import vendorOrderRouter from './routers/vendorOrderRouter.js';
import customerOrderRouter from './routers/customerOrderRouter.js';


dotenv.config();
const app = express();
const PORT =process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173/'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.use(cookieParser());

// Database connection
connectDb();
app.get('/',(req,res)=>{
    res.send(`Server is running on the port ${PORT}`);
})
// Router
app.use('/api/auth/admin',adminRouter);
app.use('/api/auth/company',companyRouter);
app.use('/api/auth/employee',employeeRouter) //admin login,employee login and vendor login
app.use('/api/auth/vendor',vendorRouter);
app.use('/api/vendor-product',vendorOrderRouter);
app.use('/api/customer-order',customerOrderRouter);


// Server Connection
app.listen(PORT,()=>{
    try {
        console.log(`Server is running on the port ${PORT}`);
    } catch (error) {
        console.log(`Server error: ${error.message}`);
    }
})
import express from 'express';
import { employeeLogin, employeeLogout, employeeRegister } from '../controllers/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.post('/register',employeeRegister);
employeeRouter.post('/login',employeeLogin);
employeeRouter.post('/logout',employeeLogout);

export default employeeRouter;
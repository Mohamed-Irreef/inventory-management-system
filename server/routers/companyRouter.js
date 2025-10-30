import { companyRegister } from "../controllers/companyController.js";
import express from 'express';

const companyRouter = express.Router();

companyRouter.post('/register',companyRegister);

export default companyRouter;
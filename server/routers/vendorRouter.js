import { vendorRegister } from "../controllers/vendorController.js";
import express from 'express';

const vendorRouter = express.Router();

vendorRouter.post('/register',vendorRegister);

export default vendorRouter;
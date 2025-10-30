import express from 'express';
import { companyOrderStausUpdate, orderRegister, qualityCheck, receivingBin, vendorOrderStatusUpdate, vendorResponse } from '../controllers/vendorOrderController.js';
import vendorRouter from './vendorRouter.js';

const vendorOrderRouter = express.Router();
vendorOrderRouter.post('/order',orderRegister); //company
vendorOrderRouter.put('/order-response',vendorResponse); //vendor
vendorOrderRouter.put('/update-status',vendorOrderStatusUpdate); //vendor
vendorOrderRouter.put('/order-cancel',companyOrderStausUpdate); // company -cancellation
vendorOrderRouter.post('/receiving-bin',receivingBin);// move to receiving bin
vendorOrderRouter.post('/quality-check',qualityCheck);// quality check and moving to storage bin

export default vendorOrderRouter;
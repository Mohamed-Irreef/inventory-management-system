import express from 'express'
import { placeOrder } from '../controllers/customerOrderControllers.js';
const customerOrderRouter = express.Router();

customerOrderRouter.post('/register',placeOrder);

export default customerOrderRouter;
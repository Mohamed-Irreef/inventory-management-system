import mongoose from "mongoose";

export const connectDb = async ()=>{
    try {
        const dbConnected = await mongoose.connect(process.env.DB_URI);
        console.log(`Database connected : ${dbConnected.connection.host}:${dbConnected.connection.port}/${dbConnected.connection.name}`);
    } catch (error) {
        console.log(`Database connection error: ${error.message}`);
    }
}
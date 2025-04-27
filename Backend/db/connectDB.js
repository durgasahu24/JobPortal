import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.MONGO_URI)

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connect successfully ::`);
    }
    catch(error){
        console.log("Error during connecting MongoDb ",error);
    }
}
export default connectDB;
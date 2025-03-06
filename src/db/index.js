import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB=async()=>{
    try{
        const connectionInfo=await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`Connected to database ${connectionInfo.connection.host}`);
        // console.log(connectionInfo)
    }
    catch(error){
        console.log("MONGODB ERROR",error);
        throw error;
    }
}
export default connectDB;
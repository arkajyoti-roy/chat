import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://arkajyotiroy445:chat123@cluster0.g6fbxlz.mongodb.net/`).then(() => {
        console.log('Database connected');
    }).catch((error)=>{
        console.log(error);
    })
};
export default connectDB;
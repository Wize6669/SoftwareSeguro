import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        //console.log("Connected to MongoDB.")
    } catch (error) {
        console.log("Error BD: "+error);
    }
};

export default connectMongoDB;
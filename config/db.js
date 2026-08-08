

import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(" data base is connected ")

}

export default connectDB ; 
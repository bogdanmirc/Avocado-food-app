import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://bogdanmirc2:6749696234@cluster0.yqfwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del').then(()=>console.log("DB Connected"));
}
import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected')
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};

import mongoose from "mongoose";

export const connectDb = () =>{ mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Connected to MongoDb Successfully");
  })
  .catch((error) => {
    console.log("Error connecteg to MongoDb", error.message);
  });}

  export default connectDb;

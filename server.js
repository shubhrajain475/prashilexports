import mongoose from "mongoose";
import { app } from "./app.js";
import cloudinary from "cloudinary"

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET // Click 'View Credentials' below to copy your API secret
});



export const server = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "ShivaniMam",
  });
  console.log("Database connected to", process.env.MONGO_URI);
  app.listen(process.env.PORT || 1111);
  console.log("Server running at port", process.env.PORT);
};
server();

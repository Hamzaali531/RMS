import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";

const app = express();

dotenv.config();

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port localhost:${process.env.PORT}`);
});
app.use(express.json())



app.use("/products", productRoutes);
app.use("/category", categoryRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    Success: false,
    statusCode,
    message,
  });
});
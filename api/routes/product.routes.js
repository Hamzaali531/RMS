import express from "express";
import { addProduct, deleteProduct, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

router.post("/add", addProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);

export default router;

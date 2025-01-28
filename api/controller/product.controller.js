import Product from "../models/product.model.js";
import mongoose from "mongoose";

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Product Id is required" });
    }

    const product = await Product.find({ id });
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { name, description, price, quantity, image } = req.body;
    if (!name || !description || !price || !image) {
      res
        .status(404)
        .json({ error: "Name, Description,Price and image is Required" });
    }
    const newProduct = new Product({
      name,
      description,
      price,
      quantity,
      image,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product saved successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Product Id is required" });
    }
    const updateData = req.body;

    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res.status(404).json({ error: "Product not Found" });
    }
    await Product.findByIdAndUpdate(productId, updateData, { new: true });
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updateData,
    });
  } catch (error) {
    next(error);
  }
};

export { addProduct, deleteProduct, updateProduct };

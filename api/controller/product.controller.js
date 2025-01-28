import Product from "../models/product.model.js";

const addProduct = async (req, res, next) => {
  try {
    const { name, description, price, quantity, image } = req.body;
    if (!name || !description || !price || !image) {
      res.status(404).json({ error: "Name, Description,Price and image is Required" });
    }
    const newProduct = new Product({ name, description, price, quantity, image });
    const savedProduct = await newProduct.save();
    res.status(201).json({
        success: true,
        message : "Product saved successfully",
    });
  } catch (error) {
    next(error);
  }
};

export { addProduct };

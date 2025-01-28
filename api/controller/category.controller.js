import Category from "../models/category.model.js";

const addcategory = async (req,res,next)=>{
    try {
        const {name} = req.body;
        if(!name){
            return res.status(400).json({error: "Name of Category is Required"})
        }
        const newCategory = new Category({
            name
        }); 
        const savedCategory = await newCategory.save();
        return res.status(200).json({message : "New Category added successfully",
            data : savedCategory
        })
    } catch (error) {
        next(error);
    }
}

export {addcategory};
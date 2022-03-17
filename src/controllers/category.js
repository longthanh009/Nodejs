import Category from "../models/category";
import Product from "../models/product";

export const createCate = async (req,res) => {
    try {
        const product = await new Category(req.body).save()
        res.json(product)
    } catch (error) {
        res.json({
            error : "Không thêm được danh mục"
        })
    }
};
export const listCate = async (req,res) => {
    try {
        const cates =  await Category.find().exec();
        res.json(cates)
    } catch (error) {
        res.json({
            error : "Không thêm được danh mục"
        })
    }
};
export const proCategory = async ( req,res) =>{
    try {
        const category = await Category.findOne({_id : req.params.id});
        const product = await Product.find({category: category}).select(-category).exec();
        res.json({
            category,product
        })
    } catch (error){
        res.json({
            err : "Lỗi không tìm được"
        })
    }
};

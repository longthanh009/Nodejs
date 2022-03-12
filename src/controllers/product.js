import mongoose from "mongoose";

const Products = mongoose.model('Products',{name: String})

export const Created = async (req,res) =>{
    try {
        const product = await new Products(req.body).save();
        res.json(product);
    } catch (error) {
        res.status("400").json({
            error : "Lỗi không thêm được sản phẩm"
        })
    }
};
export const List = async (req, res) => {
    try {
        const listPro = await Products.find().exec();
        res.json(listPro);
    } catch (error) {
        res.status("400").json({
            error : "Lỗi không lấy được sản phẩm"
        })
    }
};
export const Get = async (req, res) => {
    try {
        const pro = await Products.findOne({
            _id : req.params.id
        }).exec();
        res.json(pro);
    } catch (error) {
        res.status("400").json({
            error : "Lỗi không lấy được sản phẩm"
        })
    }
};
export const Delete = async (req, res) => {
    try {
        await Products.deleteOne({
            _id : req.params.id
        }).exec();
        console.log("Xoá sản phẩm thành công")
    } catch (error) {
        res.status("400").json({
            error : "Lỗi không xoá được sản phẩm"
        })
    }
};
export const Update = async (req, res) => {
    try {
        const pro= await Products.updateOne({
            _id : req.params.id
        },{name : req.body.name}).orFail();
        res.json(pro);
    } catch (error) {
        res.status("400").json({
            error : "Lỗi không lấy được sản phẩm"
        })
    }
};
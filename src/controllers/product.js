import Product from "../models/product";

export const Created = async (req,res) =>{
    try {
        const cate = await new Product(req.body).save();
        res.json(cate);
    } catch (error) {
        res.status("400").json({
            error : "Lỗi không thêm được sản phẩm"
        })
    }
};
export const List = async (req, res) => {
    try {
        const listPro = await Product.find().exec();
        res.json(listPro);
    } catch (error) {
        res.status("400").json({
            error : "Lỗi không lấy được sản phẩm"
        })
    }
};
export const Get = async (req, res) => {
    try {
        const pro = await Product.findOne({
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
        await Product.deleteOne({
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
        const pro= await Product.updateOne({
            _id : req.params.id
        },req.body).orFail();
        res.json(pro);
    } catch (error) {
        res.status("400").json({
            error : "Lỗi không lấy được sản phẩm"
        })
    }
};
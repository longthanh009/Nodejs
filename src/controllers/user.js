import User from "../models/user"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const {name,email,password} = req.body
    try {
        const exitsUser = await User.findOne({email}).exec()
        if(exitsUser) {
            res.status(400).json({
                message:"Email đã tồn tại"
            })
        }
        const user = await new User({name,email,password}).save()
        res.json({
            user: {
            _id : user._id,
            name: user.name,
            email: user.email,
            password : user.password
        }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: "Lỗi đăng ký"
        })
    }
};
export const login = async (req, res) => {
    const {email , password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            res.json({
                message: "Email không tồn tại"
            })
        }
        if(!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu không đúng"
            })
        }
        const token = jwt.sign({_id: user._id},"123456",{expiresIn: '1h'})
        res.json({
            token,
            user: {
                _id : user._id,
                name: user.name,
                email: user.email,
            }
        })
    } catch (error) {
        res.status(400).json({
            message:"Đăng nhập không thành công"
        })
    }
};
export const userId = async (req,res,next,id) =>{
    try {
        const user = await User.findById(id).exec();
        if(!user) {
            res.status(401).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile  = user;
        req.password = undefined
    } catch (error) {
        console.log(error)
    }
}
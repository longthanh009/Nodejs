import User from "../models/user"

export const register = async (req, res) => {
    try {
        await new User(req.body).save();
        res.json({
            message: "Đăng ký thành công"
        })
    } catch (error) {
        res.json({
            error: "Lỗi đăng ký"
        })
    }
};
export const login = async (req, res) => {
    try {
        const user = await new User.findOne({
            email: req.body.email
        });
        console.log(user)
        // if (user.password === req.body.password) {
        //     res.json({
        //         message: "Đăng nhập thành công"
        //     })
        // } else{
        //     res.json({
        //         message: "Sai tên tài khoản hoặc mật khẩu"
        //     })
        // }
    } catch (error) {
        res.json({
            error: "Sai tài khoản hoặc mật khẩu"
        })
    }
}
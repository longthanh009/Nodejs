import expressJWT from "express-jwt";

export const checkUse = (req,res,next) =>{
    const isAdmin = true;
    if (isAdmin) {
        next()
    } else {
        console.log("Abc");
    }
};
export const requirdSigin = expressJWT({
    algorithms : ['HS256'],
    secret : "123456",
    requestProperty : "auth"
});
export const isAuth = (req,res,next) =>{
    const status = req.profile._id == req.auth._id;
    if(!status) {
        res.status(401).json({
            message : "Bạn không có quyền truy cập"
        })
    }
    next();
};

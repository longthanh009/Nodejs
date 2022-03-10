export const checkUse = (req,res,next) =>{
    const isAdmin = true;
    if (isAdmin) {
        next()
    } else {
        console.log("Abc");
    }
};
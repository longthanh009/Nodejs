import express from "express";
import { checkUse, isAuth, requirdSigin } from "../middlewares/checkAuth";
import { Created, Delete, Get, List, Update } from "../controllers/product";
import { userId } from "../controllers/user";
const router = express.Router();


router.get("/products/:userId" ,requirdSigin,isAuth,checkUse,List);
router.post("/products/:userId" ,requirdSigin,isAuth,Created);
router.get("/product/:id" ,checkUse,Get);
router.delete("/product/:id" ,Delete);
router.put("/product/:id" ,checkUse,Update);
router.param("userId" , userId)
export default router
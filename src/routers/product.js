import express from "express";
import { checkUse } from "../middlewares/checkAuth";
import { Delete, Get, List, Update, Upload } from "../controllers/product";
const router = express.Router();


router.get("/products" ,checkUse,List);
router.post("/products" ,checkUse,Upload);
router.get("/product/:id" ,checkUse,Get);
router.delete("/product/:id" ,Delete);
router.put("/product/:id" ,checkUse,Update);
export default router
import express from "express";
import { checkUse } from "../middlewares/checkAuth";
import { Created, Delete, Get, List, Update } from "../controllers/product";
const router = express.Router();


router.get("/products" ,checkUse,List);
router.post("/products" ,checkUse,Created);
router.get("/product/:id" ,checkUse,Get);
router.delete("/product/:id" ,Delete);
router.put("/product/:id" ,checkUse,Update);
export default router
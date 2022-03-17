import express from "express";
import { createCate, listCate, proCategory } from "../controllers/category";

const router = express.Router();

router.post("/category",createCate);
router.get("/category",listCate)
router.get("/category/:id",proCategory)
export default router;
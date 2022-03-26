import express from "express";
import { checkUse } from "../middlewares/checkAuth";
import { register,login } from "../controllers/user";
const router = express.Router();

router.post("/register" ,checkUse,register);
router.post("/login" ,checkUse,login);
export default router
import express from "express"
import { signin, signup } from "../controllers/auth";

const router = express.Router();

router.get("/login", signin );
router.post("/register", signup);


export default router;
import express from "express"
import { signin, signup } from "../controllers/auth";
import { userByToken } from "../controllers/user";

const router = express.Router();

router.post("/login", signin );
router.post("/register", signup);
router.get("/infoUser/:token", userByToken);


export default router;
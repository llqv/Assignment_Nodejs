import express from 'express';
import { add, list, read, remove, update } from '../controllers/category';

const router = express.Router();


router.get("/categories", list);
router.get("/categories/:id", read);
router.post("/categories", add);
router.delete("/categories/:id", remove);
router.patch("/categories/:id", update);

export default router;
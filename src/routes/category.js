import express from 'express';
import { add, list, read, remove, update } from '../controllers/category';

const router = express.Router();


router.get("/categorys", list);
router.get("/categorys/:id", read);
router.post("/categorys", add);
router.delete("/categorys/:id", remove);
router.patch("/categorys/:id", update);

export default router;
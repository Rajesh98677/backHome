import express  from "express";
import auth from "../middleware/auth.js";
import { createService } from "../controllers/service.js";

const router = express.Router();

router.post('/',auth, createService);
// router.get('/:id', getService);

export default router;

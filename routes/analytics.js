import express  from "express";
import { getRentals} from '../controllers/analytics.js'
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();


router.get('/',adminAuth,getRentals);
// router.get('/', allUsers);

// router.get('/:id', getRental);
// router.post('/',auth, createRental);
// router.patch('/:id',auth, updateRental);



export default router;

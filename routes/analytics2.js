import express  from "express";
import { allUsers} from '../controllers/analytics2.js'
// import auth from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();


// router.get('/', getRentals);
router.get('/',adminAuth, allUsers);

// router.get('/:id', getRental);
// router.post('/',auth, createRental);
// router.patch('/:id',auth, updateRental);



export default router;

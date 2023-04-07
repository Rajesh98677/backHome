import express  from "express";
import { adminSignIn ,adminSignUp} from '../controllers/adminAuth.js'

const router = express.Router();




// router.get('/', getRentals);
router.post('/asignin',adminSignIn);
router.post('/asignup', adminSignUp);



export default router;

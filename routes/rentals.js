import express  from "express";
import {deleteRental,getRentals,getRental, getRentalsBySearch,createRental,updateRental} from '../controllers/rentals.js'
import auth from "../middleware/auth.js";

const router = express.Router();



router.get('/', getRentals);
router.get('/search', getRentalsBySearch);

// router.get('/:userId', getRentalCreator);
router.get('/:id', getRental);
router.post('/',auth, createRental);
router.patch('/:id',auth, updateRental);
router.delete('/:id', auth, deleteRental);



export default router;

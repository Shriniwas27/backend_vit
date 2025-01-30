import express from 'express';
import { CreateTrip, GetAllTrips, GetTripById } from '../controllers/tripcontroller.js';
import {auth} from '../middlewares/auth.js';

const router = express.Router();

router.post('/user/create', auth,CreateTrip);
router.get('/user/alltrips/:userid', auth,GetAllTrips);
router.get('/user/trip/:userid/:tripid',auth, GetTripById);

export default router;
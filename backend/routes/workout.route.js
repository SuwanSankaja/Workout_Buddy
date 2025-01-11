import express from 'express';
import Workout from '../models/workout.model.js';
import { createAWorkout, getAllWorkouts, getAWorkout, deleteAWorkout, updateAWorkout } from '../controllers/workout.controller.js';


const router = express.Router();

router.get('/', getAllWorkouts);

router.get('/:id', getAWorkout);

router.post('/', createAWorkout);

router.delete('/:id', deleteAWorkout);

router.patch('/:id', updateAWorkout)  


export default router;
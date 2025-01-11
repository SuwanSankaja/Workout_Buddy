import Workout from '../models/workout.model.js';
import mongoose from 'mongoose';

// get all workouts
export const getAllWorkouts = async (req, res) => {
    try{
        const workouts = await Workout.find( );
        res.status(200).json(workouts);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

// get a workout by id
export const getAWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No workout with that id');

    try{
        const workout = await Workout.findById(id);
        res.status(200).json(workout);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

// create a new workout
export const createAWorkout = async (req, res) => {
    const {title,load,reps} = req.body;

    try{
        const workout = await Workout.create({title,load,reps});
        res.status(201).json(workout);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }

}


// delete a workout by id
export const deleteAWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No workout with that id');

    const workout = await Workout.findOneAndDelete(id);

    if (workout) {
        res.json({message: 'Workout deleted successfully'});
    } else {
        res.status(404).json({message: 'Workout not found'});
    }
}


// update a workout by id
export const updateAWorkout = async (req, res) => {
    const { id } = req.params;
    const { title, load, reps } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No workout with that id');
    }

    const workout = { title, load, reps, _id: id };

    try {
        const updatedWorkout = await Workout.findOneAndUpdate(
            { _id: id }, // Correctly specify the filter object
            workout,
            { new: true } // Return the updated document
        );

        if (!updatedWorkout) {
            return res.status(404).send('Workout not found');
        }

        res.status(200).json(updatedWorkout); // Send back the updated workout
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all workouts');
})

router.get('/:id', (req, res) => {
    res.send('Get a workout by id');
})

router.post('/', (req, res) => {
    res.send('Create a new workout');
})

router.delete('/:id', (req, res) => {
    res.send('Delete a workout by id');
})

router.patch('/:id', (req, res) => {
    res.send('Update a workout by id');
})  


export default router;
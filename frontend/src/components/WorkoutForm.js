import { useState } from 'react';
const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };

        const res = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        });

        const data = await res.json();

        if (res.ok) {
            console.log('Workout added');
            setTitle('');
            setLoad('');
            setReps('');
            setError('');
    }   else {
            setError(data.message);
            console.log('Error:', error);
        }
    }


    return (
            <form className='create' onSubmit={handleSubmit}>
                <h3>Add a New Workout</h3>
                <label>Workout Title:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Load (kg):</label>
                <input
                    type='number'
                    required
                    value={load}
                    onChange={(e) => setLoad(e.target.value)}
                />
                <label>Reps:</label>
                <input
                    type='number'
                    required
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                />
                <button>Add Workout</button>
                {error && <div className='error'>{error}</div>}
            </form>
    )
}

export default WorkoutForm;
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
    // Add () to call the hook
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const res = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE',
        });
        const data = await res.json();

        if (res.ok) {
            console.log('Workout deleted');
            dispatch({ type: 'DELETE_WORKOUT', payload: workout._id });
        } else {
            console.log(data.message);
        }
    };

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    );
};

export default WorkoutDetails;

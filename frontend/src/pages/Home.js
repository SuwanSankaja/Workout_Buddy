import{useEffect} from 'react';
import {useWorkoutsContext} from '../hooks/useWorkoutsContext';

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {

  const {workouts,dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('/api/workouts');
      const data = await res.json();
      if (res.ok) {
          dispatch({type: 'SET_WORKOUTS', payload: data}); 
      }
    }
    fetchWorkouts();
  } , [dispatch]); //component

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
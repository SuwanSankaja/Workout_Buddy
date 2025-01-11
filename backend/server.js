import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import workoutsRouter from './routes/workout.route.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use((req, res, next)=> {
    console.log(req.path, req.method);
    next();
})

app.use("/api/workouts",workoutsRouter);


app.get('/', (req, res) => {
  res.send('Hello World');
}); 

mongoose.connect(process.env.MONGO_URI).then(()=> {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log('Server is running on port:',PORT);
  });
}).catch((error) => {
  console.log(error);
});


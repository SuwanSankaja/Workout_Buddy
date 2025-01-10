import express from 'express';
import dotenv from 'dotenv';
import workoutsRouter from './routes/workouts.route.js';
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


app.listen(PORT, () => {
  console.log('Server is running on port:',PORT);
});
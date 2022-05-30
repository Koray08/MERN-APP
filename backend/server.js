import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import exercisesRouter from '../routes/exercises';
import usersRouter from '../routes/users';


import dotenv from 'dotenv/config';

const app = express();
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Successful brooooooooooooooooooooooo")
})

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
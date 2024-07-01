import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db';
import authRoutes from './routes/auth';
import auth from './middleware/auth';
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use(cors());
// const corsOptions = {
//   origin: ['http://localhost:8080', 'http://localhost:5173'],
// };

// app.use(cors(corsOptions));

app.use('/api/auth',authRoutes);


app.get("/",async(req,res) => {
    res.send("Login Service is up and running")
})

app.get('/authenticated',auth,(req,res) => {
    res.send("Hi")
});

app.listen(port, () => {
  console.log(`Authentication service running on port ${port}`);
});

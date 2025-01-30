import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import tripRouter from './routes/tripRoutes.js';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('API is running...');
});

app.use('/api/user', userRouter);
app.use('/api/trip', tripRouter);

connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


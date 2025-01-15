import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createRouter } from './api/v1/router';

dotenv.config();

const ten = 10;
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

const router = createRouter();
app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/ping', (req, res) => {
  res.json({ message: 'CGU Space Club API is running!' });
});

app.get('/api/demo', (req, res) => {
  res.json({ 
    message: 'Welcome to CGU Space Club!',
    club: 'CGU Space Club',
    university: 'C. V. Raman Global University',
    location: 'Bhubaneswar, Odisha, India'
  });
});

export default app;

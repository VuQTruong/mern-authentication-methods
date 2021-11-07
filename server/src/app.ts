import express from 'express';
import { authRouter } from './routes/auth.routes';

const app = express();

app.get('/healthcheck', (req, res) => {
  res.send('OK');
});

app.use('/auth', authRouter);

export default app;

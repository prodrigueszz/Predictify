import express from 'express';
import PredictionRouter from './application/routes/prediction.routes';
import UserRouter from './application/routes/user.routes';
import './infra/config/dotenv';

const app = express();
const port = 3000;

app.use(express.json());
app.use(UserRouter);
app.use(PredictionRouter);

app.get('/', UserRouter);
app.post('/', UserRouter);
app.put('/', UserRouter);
app.patch('/', UserRouter);
app.delete('/', UserRouter);

app.get('/', PredictionRouter);
app.post('/', PredictionRouter);
app.put('/', PredictionRouter);
app.patch('/', PredictionRouter);
app.delete('/', PredictionRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

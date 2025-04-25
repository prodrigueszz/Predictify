import express from 'express';
import MatchRouter from './application/routes/match.routes';
import PredictionRouter from './application/routes/prediction.routes';
import UserRouter from './application/routes/user.routes';
import './infra/config/dotenv';

const app = express();
const port = 3000;

app.use(express.json());
app.use(UserRouter);
app.use(PredictionRouter);
app.use(MatchRouter);

app.get('/', UserRouter);
app.post('/', UserRouter);
app.delete('/', UserRouter);

app.get('/', PredictionRouter);
app.post('/', PredictionRouter);
app.delete('/', PredictionRouter);

app.post('/', MatchRouter);
app.get('/', MatchRouter);
app.delete('/', MatchRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

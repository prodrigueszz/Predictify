import express from 'express';
import './infra/config/dotenv';
import MatchRouter from './presentation/routes/match.routes';
import PredictionRouter from './presentation/routes/prediction.routes';
import UserRouter from './presentation/routes/user.routes';

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

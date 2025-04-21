import express from 'express';
import '../src/infrastructure/config/dotenv';
import router from './application/routes/user.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.get('/', router);
app.post('/', router);
app.put('/', router);
app.patch('/', router);
app.delete('/', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

import express from 'express';
import cors from 'cors';
import { taskRoutes } from './routes/tasks.routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`TaskFlow API running at http://localhost:${port}`);
});

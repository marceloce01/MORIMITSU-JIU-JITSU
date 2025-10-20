import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import { userRouter } from './routes/UserRoutes';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

app.listen(PORT, () => console.log(`Servidor rodando em http://${HOST}:${PORT}`))


app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.use(cors(
    {
      origin:['http:/localhost:8000']
    }
));

app.use(express.json())

app.use("/user", userRouter)
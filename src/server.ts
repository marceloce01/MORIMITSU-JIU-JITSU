import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import { userRouter } from './routes/UserRoutes.js';
import { authRouter } from './routes/AuthRoutes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.use(cors(
    {
      origin:['http://localhost:3000']
    }
));

app.use(express.json())

app.use("/user", userRouter)
app.use("/auth", authRouter)

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))
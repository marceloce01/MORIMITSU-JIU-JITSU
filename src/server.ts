import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import { userRouter } from './routes/UserRoutes.js';
import { authRouter } from './routes/AuthRoutes.js';

const app = express();

dotenv.config();

const PORT = Number(process.env.PORT) || 3000

app.use(cors(
    {
      origin:'*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }
));


app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.use(express.json())

app.use("/user", userRouter)
app.use("/auth", authRouter)

app.listen(PORT, "0.0.0.0", () => console.log(`Servidor rodando na porta ${PORT}`))

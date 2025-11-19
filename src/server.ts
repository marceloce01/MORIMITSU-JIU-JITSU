import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import { setupSwagger } from './docs/swaggerConfig.js';
import { userRouter } from './routes/UserRoutes.js';
import { authRouter } from './routes/AuthRoutes.js';
import { studentRouter } from './routes/StudentRoutes.js';


const app = express();

dotenv.config();
console.log("DATABASE_URL:", process.env.DA)
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

setupSwagger(app)
app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/student", studentRouter)

app.listen(PORT, "0.0.0.0", () => console.log(`Servidor rodando na porta ${PORT}`))

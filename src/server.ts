import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import { setupSwagger } from './docs/swaggerConfig.js';
import { userRouter } from './routes/UserRoutes.js';
import { authRouter } from './routes/AuthRoutes.js';
import { studentRouter } from './routes/StudentRoutes.js';
import { classRouter } from './routes/ClassRoutes.js';
import { beltRouter } from './routes/BeltRoutes.js';

const app = express();

dotenv.config();

console.log("DATABASE_URL:", process.env.DATABASE_URL)
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
app.use(express.urlencoded({ extended: true }));

setupSwagger(app)
app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/student", studentRouter)
app.use("/class", classRouter)
app.use("/belt-config", beltRouter)

app.listen(PORT, "0.0.0.0", () => console.log(`Servidor rodando na porta ${PORT}`))

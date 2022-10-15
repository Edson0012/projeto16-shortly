import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server listen on port ${PORT}`))


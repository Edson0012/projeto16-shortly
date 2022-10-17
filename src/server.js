import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter.js"
import urlRouter from "./routers/urlRouter.js"
import usersRouter from "./routers/usersRouter.js"


const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(urlRouter);
app.use(usersRouter);

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server listen on port ${PORT}`))


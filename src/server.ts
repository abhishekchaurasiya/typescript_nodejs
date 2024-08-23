import express, { Application } from 'express';
import cors from "cors";
import "dotenv/config";
import "./configs/database.js";
import userIndex from './utils/constant.utils.js';
import userRouter from "./routes/user.routes.js";


// import { morganMiddleware } from "./middleware/morgan.middleware.js";
const port: number = Number(process.env.PORT);

const app: Application = express();

// app.use(morganMiddleware)

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors());

app.use(userIndex, userRouter);


app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

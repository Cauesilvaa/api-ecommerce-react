import "express-async-errors";
import express from 'express';
import { routes } from './routes/index.routes';
import { errorMidleware } from "./midlewares/error/errorMidleware";

const app = express();

app.use(express.json())
app.use(routes)
app.use(errorMidleware)
app.listen(process.env.PORT, ()=> console.log(`Server running on port ${process.env.PORT}`));
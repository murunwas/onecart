require("dotenv").config();
import express from "express";
import cors from 'cors';

import appRoutes from "./controllers";
import { errorHandler } from "./middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'))


appRoutes(app);

errorHandler(app);





const PORT= 3100;

app.listen(PORT, ()=>console.log("running on port : "+PORT))
export default app;

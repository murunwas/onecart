require("dotenv").config();
import express from "express";
import cors from 'cors';
import path from "path"

import appRoutes from "./controllers";
import { errorHandler } from "./middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'))



// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

appRoutes(app);

errorHandler(app);





const PORT= process.env.PORT || 3100;

app.listen(PORT, ()=>console.log("running on port : "+PORT))
export default app;

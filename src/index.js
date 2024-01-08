import express from "express"
import {connect} from "./config/database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api",router)

app.listen(3001, async ()=> {
    console.log("Server Started at 3001");
    // mongo db connection establishment
    connect();
    console.log("Mongo DB connected");

})
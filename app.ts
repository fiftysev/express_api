require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import userRouter from "./src/routers/userRouter";
import tweetRouter from "./src/routers/tweetRouter";
import helperRouter from "./src/routers/helperRouter";

const app = express();

// middlewares for parsing req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add routers
// TODO: -Create main router for manips
app.use("/users", userRouter);
app.use("/tweets", tweetRouter);
app.use("/api", helperRouter);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Main route");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

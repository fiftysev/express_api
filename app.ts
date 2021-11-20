import express from "express";
import bodyParser from "body-parser";
import userRouter from "./src/routers/userRouter";
import tweetRouter from "./src/routers/tweetRouter";

const app = express();

const PORT = 3000;

// middlewares for parsing req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// add routers
// TODO: -Create main router for manips
app.use("/users", userRouter);
app.use("/tweet", tweetRouter);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send("Main route");
})

//TODO: Написать роут для твиттов (напр. /post)
//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
//TODO: Написать запрос для получения твитта по его ID
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)

//TODO: Роут для актуального
//TODO: Написать запрос на получение списка актуального

//TODO: Роут для поиска
//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
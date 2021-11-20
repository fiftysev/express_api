import express from "express";
import userRouter from "./src/routers/userRouter";

const app = express();

const urlencodedParser = express.urlencoded({extended: false});
const PORT = 3000;

app.use("/users", userRouter);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send("Hello world");
})

// app.post('/', urlencodedParser, (req: express.Request, res: express.Response) => {
  // const name= req.body.name;
  // const responseMessage = "Hello " + name + "!"
  // res.send(responseMessage)
// })


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
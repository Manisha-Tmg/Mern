// make express app
// attach port to it

import express, { json } from "express";
import connectToDb from "./src/connectToDb/connectToDb.js";
import productRouter from "./src/routes/productRouter.js";
import cors from "cors";
import bookRouter from "./src/routes/bookRouter.js";

let app = express();

app.listen(8000, () => {
  console.log(`<---- Apllication is listening at 8000 ---->`);
  connectToDb();
});
// npm i cors
app.use(cors());
app.use(json()); //make our system capable to take json data , always place it at top
app.use("/product", productRouter);
app.use("/book", bookRouter);
// app.get("/tests", test);

/* 
Schema -data structure define
model
router
index - define router to express app

*/

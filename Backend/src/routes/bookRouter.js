import { Router } from "express";
import {
  createBook,
  deleteBook,
  readBook,
  readSpecificBook,
  updateBookController,
} from "../controller/bookController.js";

const bookRouter = Router();
//    "/""=localhost:8000 / books;

bookRouter.route("/").post(createBook).get(readBook);

//    "/""=localhost:8000/books/:id;
bookRouter
  .route("/:id")
  .get(readSpecificBook)
  .patch(updateBookController)
  .delete(deleteBook);

//update
//id -req.params.id
// data -req.body

export default bookRouter;

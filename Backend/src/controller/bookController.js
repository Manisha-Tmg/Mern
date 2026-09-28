import expressAsyncHandler from "express-async-handler";
import { Book } from "../schema/model.js";

export const createBook = expressAsyncHandler(async (req, res) => {
  const result = await Book.create(req.body);

  res.status(201).json({
    success: true,
    message: "Book created successfully",
    result: result,
  });
});

export const readBook = expressAsyncHandler(async (req, res) => {
  const result = await Book.find();
  res.status(200).json({
    success: true,
    message: "Book read successfully",
    result: result,
  });
});

export const readSpecificBook = expressAsyncHandler(async (req, res) => {
  const result = await Book.findById(req.params.id);
  res.status(200).json({
    success: true,
    message: "Book read successfully",
    result: result,
  });
});

export const updateBookController = expressAsyncHandler(async (req, res) => {
  const result = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    success: true,
    message: "Book Updated sucessfully",
    result: result,
  });
});

export const deleteBook = expressAsyncHandler(async (req, res) => {
  const result = await Book.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Prodcut deleted successfully",
    result: result,
  });
});

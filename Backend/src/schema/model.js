import { model } from "mongoose";
import productSchema from "./productSchema.js";
import bookSchema from "./bookSchema.js";

export const Product = model("produts", productSchema);
export const Book = model("books", bookSchema);

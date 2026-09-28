import { Schema } from "mongoose";

const bookSchema = Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  stock: {
    type: Number,
    required: [true, "stock is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  author: {
    type: String,
  },
  publication: {
    type: String,
  },
});
export default bookSchema;

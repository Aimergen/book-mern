import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();
// Route new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Nomiin medeelelee yavullna uu" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (err) {
    console.log("aldaa:", err);
    res.status(500).send({ message: err.message });
  }
});

// GET all book
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

// GET single book
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

// PUT update
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Nomiin medeelelee yavullna uu" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }

  const { id } = req.params;
  const update = await Book.findByIdAndUpdate(id, req.body);

  if (!update) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).send({ message: "Book updated successfully" });
});

// DELETE route
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bookDelete = await Book.findByIdAndDelete(id);

    if (!bookDelete) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted succesfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

export default router;

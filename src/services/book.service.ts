import { BookInput } from "../common/interfaces/book.interface";
import { Book } from "../models/Book";

export const list = async function (): Promise<any> {
  try {
    const books: any = await Book.find();
    return { success: true, data: books, error: null };
  } catch (error) {
    return {
      success: false,
      message: "No books found",
      error: error,
    };
  }
};

export const getById = async function (id: string): Promise<any> {
  try {
    const book: any = await Book.findById(id);
    return { success: true, data: book, error: null };
  } catch (error) {
    return { success: false, message: "No book found", error: error };
  }
};

export const create = async function (book: BookInput): Promise<any> {
  try {
    const newBook: any = await Book.create(book);
    return {
      success: true,
      error: null,
      message: "Book added successfully",
      data: newBook,
    };
  } catch (error) {
    return { success: false, message: "Unable to add this book", error: error };
  }
};

export const updateById = async function (
  id: string,
  book: BookInput | any
): Promise<any> {
  try {
    const updatedBook: any = await Book.findByIdAndUpdate(id, book, {
      new: true,
    });
    return {
      success: true,
      error: null,
      message: "Updated successfully",
      data: updatedBook,
    };
  } catch (error) {
    return { success: false, message: "Unable to add this book", error: error };
  }
};

export const deleteById = async function (id: string): Promise<any> {
  try {
    const deleted: any = await Book.findByIdAndRemove(id, {
      new: true,
    });
    return {
      success: true,
      error: null,
      message: "Book entry deleted successfully",
      deleted: !!deleted,
    };
  } catch (error) {
    return { success: false, message: "No such a book", error: error };
  }
};

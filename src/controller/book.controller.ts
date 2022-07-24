import { Request, Response } from "express";
import * as bookService from "../services/book.service";
import { BookInput } from "../common/interfaces/book.interface";
import { Book } from "../models/Book";

export const list = async (req: Request, res: Response) => {
  try {
    const response: any = await bookService.list();
    res.json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response: any = await bookService.getById(id);
    res.json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const body: BookInput = req.body;
    const response = await bookService.create(body);
    res.json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const updateById = async (req: Request, res: Response) => {
  try {
    const body: BookInput | any = req.body;
    const { id } = req.params;
    const response = await bookService.updateById(id, body);
    res.json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await bookService.deleteById(id);
    res.json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};

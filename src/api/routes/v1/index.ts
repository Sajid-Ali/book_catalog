import express from "express";
const router = express.Router();

import { bookRoute } from "./book";

router.use("/books", bookRoute);

export default router;

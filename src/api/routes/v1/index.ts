import express from "express";
const router = express.Router();

import { bookRoute } from "./book";

router.use("/book", bookRoute);

export default router;

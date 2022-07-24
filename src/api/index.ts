import express from 'express';
const router = express.Router();
import RoutesRouter from './routes';

router.use('/', RoutesRouter);

export default router;
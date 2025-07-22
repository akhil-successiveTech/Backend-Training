import express from 'express';
import router from './routes/userRoutes';
import { loggerMiddleware } from './middleware/logger';
import errorHandler from './middleware/errorHandler';
import customHeaderMiddleware from './middleware/custom';
import { basicLimiter } from './middleware/rateLimitMiddleware';
import { Request, Response, NextFunction } from 'express';
import CreateError from "http-errors";

const app = express();
// process learn
const PORT = 3000;

// Middleware setup
app.use(express.json());
app.use(loggerMiddleware);
app.use(customHeaderMiddleware("Akhil", "Dhawan"));
app.use(basicLimiter(3, 30000));

// Routes
app.use('/api', router);

// Created for assignment-5 but not needed
app.use('/error-handler', (req: Request, res: Response, next: NextFunction) => {
  next(CreateError(404, "Not Found"));
})

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

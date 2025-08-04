import express from 'express';
import router from './routes/userRoutes';
import LoggerMiddleware from './middleware/LoggerMiddleware'; 
import CustomHeaderMiddleware from './middleware/CustomHeaderMiddleware';
import RateLimitMiddleware from './middleware/RateLimitMiddleware';
import { Request, Response, NextFunction } from 'express';
import CreateError from "http-errors";
import healthRoute from './routes/healthRoute';
import { config } from './utils/config';
import seedCountries from './seed/seedCountries';
import { connectDB } from './database';
import dotenv from 'dotenv';
import ErrorHandler from './middleware/ErrorHandler';

const app = express();
dotenv.config();

const PORT = config.port;
const customHeader = new CustomHeaderMiddleware('Name', 'Akhil');
const RateLimit = new RateLimitMiddleware(3, 30000);

// Middleware setup
app.use(express.json());
app.use(LoggerMiddleware.handler);
app.use(customHeader.handler);
app.use(RateLimit.handler);

// Routes
app.use('/api', router);
// Health route
app.use('/health', healthRoute);

// Created for assignment-5 but not needed
app.use('/error-handler', (req: Request, res: Response, next: NextFunction) => {
  next(CreateError(404, "Not Found"));
})

// Error handler
app.use(ErrorHandler.handler);

// Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

connectDB()
  .then(async () => {
    // Runs the seedCountries condition
    if(config.seed === "true"){
      await seedCountries();
    }
    app.listen(PORT, () => {
      console.log( `Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
});
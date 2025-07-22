import express from 'express';
import router from './routes/userRoutes';
import { loggerMiddleware } from './middleware/logger';
import errorHandler from './middleware/errorHandler';
import customHeaderMiddleware from './middleware/custom';
import { basicLimiter } from './middleware/rateLimitMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(loggerMiddleware);
app.use(customHeaderMiddleware("Akhil", "Dhawan"));
app.use(basicLimiter(3, 30000));

// Routes
app.use('/api', router);

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

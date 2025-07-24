import dotenv from 'dotenv';
dotenv.config();
// This will export the port and key to the whole application
export const config = {
  port: process.env.PORT || 8000,
  secret: process.env.JWT_SECRET || "secret-key",
  seed: process.env.SEED,
  url: process.env.MONGO_URI || "mongodb://localhost:27017/cricket"
};
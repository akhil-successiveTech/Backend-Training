// app.js
import express, {Request, Responce} from "express"
import { mockList } from "./mockData";

const app = express();
const PORT = 3000;

// GET API to return mock data
app.get('/api/items', (req: Request, res: Responce) => {
  res.json(mockList);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

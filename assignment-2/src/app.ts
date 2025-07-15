// app.js
import express, {Request, Response} from "express"
import { mockList } from "./mockData";

const app = express();
const PORT = 3000;

// GET API to return mock data
app.get('/items', (req: Request, res: Response) => {
  res.json(mockList);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

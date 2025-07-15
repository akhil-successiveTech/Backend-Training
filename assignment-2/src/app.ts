const express = require('express');
const mockList = require('./mockData');

const app = express();
const PORT = 3000;

// GET API to return mock data
app.get('/api/items', (req, res) => {
  res.json(mockList);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
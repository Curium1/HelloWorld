const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome Patrick, to my simple Express server!');
});

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, this is your API endpoint!' });
});

// Post route example
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}! Your data has been received.` });
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

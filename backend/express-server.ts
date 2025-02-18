import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Keeb Model A' }, { id: 2, name: 'Keeb Model B' }]);
});

app.post('/api/recommend-keyboard', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:8000/recommend-keyboard', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error calling FastAPI service' });
  }
});

app.listen(3001, () => console.log('Express running on http://localhost:3001'));

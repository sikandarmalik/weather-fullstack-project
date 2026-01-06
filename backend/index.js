import express from 'express';
import cors from 'cors';
import weatherRouter from './routes/weather.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRouter);

app.get('/health', (req, res) => {
    res.json({ status: 'ok'});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
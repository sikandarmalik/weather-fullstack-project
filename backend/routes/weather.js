import express from 'express';
import { getCurrentWeather } from '../services/weatherService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const weather = await getCurrentWeather();
        res.json(weather);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather data' });    
    }
})

export default router;
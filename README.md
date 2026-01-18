# Full Stack Weather App

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

A simple full-stack weather app built with React and Express. The backend fetches data from the Hong Kong Observatory Open Data API, and the frontend displays current weather info.

## 📸 Screenshots & Demo

### Application Screenshots

## Frontend UI

![alt text](<assets/frontend ui.png>)

## Backend API

![alt text](<assets/backened weather data.png>)

## Tech Stack

### Backend

- Node.js, Express, Axios

### Frontend

- React, Vite

## Project Structure

- `backend/`: Express server with API integration
- `frontend/`: React app

## Getting Started

### Backend

```bash
cd backend
npm install
npm start
```

Runs on http://localhost:3001.

Weather data: http://localhost:3001/api/weather

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on http://localhost:5173.

## API

Uses [Hong Kong Observatory Open Data API](https://data.weather.gov.hk/weatherAPI/opendata/weather.php).

## What I Like About the Code

- Clear separation between frontend and backend responsibilities
- Simple and readable Express route structure
- Backend normalizes the external API response instead of exposing raw data
- Minimal React components that are easy to reason about
- Clean, minimal UI with clear visual hierarchy rather than adding unnecessary features

## What I Don’t Like / What Could Be Improved

- Error handling is basic and could be more robust
- No caching for the weather API response
- Frontend state management is simplistic and not suitable for larger apps
- Weather condition mapping is minimal and could be improved for better UX
- No automated tests due to simple implementaion
- Configuration (such as the API URLs) could be centralized

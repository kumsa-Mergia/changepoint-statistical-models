# 📊 Brent Oil Price Dashboard – Frontend

This React-based dashboard visualizes Brent Oil price trends over time with interactive charts. It fetches data from a Flask API and highlights major economic change points using annotated events.

---

## 🚀 Features

- 📈 Line chart for Brent Oil prices with a 30-day moving average (Recharts)
- 🟡 Annotations for major global economic events (e.g., COVID-19, financial crisis)
- ⚡ Interactive tooltips and responsive layout
- 🔄 Live fetching from Flask backend API

---

## 📂 Folder Structure

```

frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PriceChart.jsx
│   │   └── EventMarkers.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js

````

---

## 🛠️ Tech Stack

- **React** with Vite for fast development
- **Recharts** for data visualization
- **Tailwind CSS** for UI styling
- **Fetch API** to consume backend endpoints

---

## 🔧 Setup & Run

1. **Install dependencies:**

   ```bash
   cd frontend
   npm install
```

2. **Start development server:**

   ```bash
   npm run dev
   ```

   This runs the app at [http://localhost:5173](http://localhost:5173)

3. **Make sure the backend (Flask) is running** at [http://localhost:5000](http://localhost:5000)

---

## 🌐 API Endpoints

* `GET /api/oil-prices` → Brent oil prices with moving average
* `GET /api/events` → Annotated change point events

> These endpoints are served from the Flask backend.

---

## 🧪 Sample Screenshot 

This is the frontend React application for visualizing Brent crude oil price trends and key economic events using a dynamic chart.

![Dashboard Screenshot](https://drive.google.com/uc?export=view&id=1PJeodQQEXvWNT5nbNjbg6CYH64dTcU2u)


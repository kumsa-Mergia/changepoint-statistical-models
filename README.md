# 🛢️ Brent Oil Price Change Point Analysis

## 🚀 Project Overview

This project analyzes the impact of major geopolitical, economic, and organizational events on **Brent crude oil prices**. It uses **Bayesian Change Point Detection** to identify structural breaks in historical price data (1987–2022). These change points are then correlated with real-world events like wars, sanctions, OPEC decisions, and economic collapses.

📊 A **React + Tailwind CSS dashboard** allows users to explore trends interactively, while the backend is powered by **Flask** to serve model insights.

---

## 🎯 Objectives

- Detect significant structural breaks in Brent oil prices.
- Link those change points to real-world events.
- Build an interactive and informative dashboard.
- Provide valuable insights for analysts, investors, and policymakers.
- Create a clean, reproducible analysis workflow.

---

## 📁 Folder Structure

```

changepoint-statistical-models/
│
├── data/
│   └── BrentOilPrices.csv          # Historical Brent oil price data
│
├── src/
│   ├── data_loader.py              # Data loading and preprocessing scripts
│   ├── eda.py                      # Exploratory Data Analysis scripts
│   ├── change_point_model.py       # Bayesian Change Point modeling code
│   ├── api.py                      # Flask API layer
│
├── dashboard/
│   ├── frontend/                   # React + Tailwind dashboard UI
│       ├── public/    
│       ├── src/
│           ├──  assets/ 
│           ├──  components/               # Reusable UI components
│                 ├── PriceChart.jsx
│                 ├── EventMarkers.jsx
│           ├──  App.jsx                   # Main app component
│           ├──  main.jsx                     
│           ├──  tailwind.config.js        # Tailwind configuration
│           ├──  postcss.config.js         # PostCSS config for Tailwind
│           ├──  package.json
│           ├──  vite.config.js                  # Vite dev/build config
│   └── backend/                    # Flask backend serving model data
│       └── app.py
│
├── notebook/
│   ├── change-point\_analysis.ipynb # Change point detection workflow
│   └── eda\_analysis.ipynb          # EDA insights
│
└── main.py                         # Main script for running full pipeline

````

---

## 🧾 Data Description

- **Dataset:** `BrentOilPrices.csv`
- **Period:** May 20, 1987 – September 30, 2022
- **Columns:**
  - `Date`: Date of observation (YYYY-MM-DD)
  - `Price`: Brent crude oil price (USD per barrel)

---

## 🧠 Methodology

1. **Data Preparation & EDA:** Clean and visualize historical prices.
2. **Event Compilation:** Manually annotate key historical events (wars, crashes, etc.).
3. **Bayesian Change Point Detection:** Detect structural breaks using `PyMC3`.
4. **Interpretation:** Associate breaks with actual events to derive causality.
5. **Visualization Dashboard:** Build an interactive React frontend with Flask API backend.

---

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/kumsa-Mergia/changepoint-statistical-models.git
cd changepoint-statistical-models

# Python dependencies
pip install -r requirements.txt
````

Install frontend dependencies:

```bash
cd dashboard/frontend
npm install
```

---

## 🚦 Usage

### 1. Run main pipeline

```bash
python main.py
```

### 2. Start backend API

```bash
cd dashboard/backend
python app.py
```

### 3. Launch frontend (React + Vite)

```bash
cd dashboard/frontend
npm run dev
```

### 4. Explore Jupyter notebooks

```bash
jupyter notebook notebook/
```

---

## 📷 Sample Screenshot

This is the frontend React dashboard visualizing Brent oil price changes and key historical events.

![Dashboard Screenshot](https://drive.google.com/uc?export=view\&id=1PJeodQQEXvWNT5nbNjbg6CYH64dTcU2u)

---

## 🧑‍💻 Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Recharts
* **Backend:** Flask (Python), REST API
* **Modeling:** PyMC3, NumPy, Pandas
* **Visualization:** Matplotlib, Plotly, Recharts
* **Packaging:** Modular Python scripts and notebooks

---

## 🤝 Contributing

Contributions, suggestions, and PRs are warmly welcome. Please open an [issue](https://github.com/kumsa-Mergia/changepoint-statistical-models/issues) to discuss ideas or improvements.

---



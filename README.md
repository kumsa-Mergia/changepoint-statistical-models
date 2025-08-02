# Brent Oil Price Change Point Analysis

## Project Overview

This project analyzes the impact of major geopolitical, economic, and organizational events on Brent crude oil prices. Using historical daily price data from 1987 to 2022, we apply Bayesian Change Point detection methods to identify significant structural breaks in the price series. By linking these breaks to key events—such as political decisions, conflicts in oil-producing regions, international sanctions, and OPEC policy changes—we provide actionable insights for investors, policymakers, and energy companies.

## Objectives

- Identify key events significantly affecting Brent oil prices.
- Quantify price changes associated with these events.
- Develop a reproducible analysis workflow.
- Apply Bayesian Change Point models to detect structural breaks.
- Communicate insights effectively to stakeholders.

## Folder Structure

```

changepoint-statistical-models/
│
├── data/
│   └── BrentOilPrices.csv          # Historical Brent oil price data
│
├── src/
│   ├── data_loader.py              # Data loading and preprocessing scripts
│   ├── eda.py                     # Exploratory Data Analysis scripts
│   ├── change_point_model.py       # Bayesian Change Point modeling code
│   ├── api.py                     # API layer for serving model results
│
├── dashboard/
│   ├── frontend/                  # React application for visualization
│   └── backend/                   # Flask backend serving data and model results
│       └── app.py
│
├── notebook/
│   └── change-point_analysis.ipynb           
│   └── eda_analysis.ipynb
│
└── main.py                       # Main script to run the complete analysis pipeline

````

## Data Description

- **Dataset:** `BrentOilPrices.csv` contains daily Brent crude oil prices from May 20, 1987, to September 30, 2022.
- **Columns:**  
  - `Date` — Observation date (day-month-year format)  
  - `Price` — Brent oil price in USD per barrel

## Methodology

1. **Data Preparation & EDA**  
   Data loading, cleaning, visualization of trends and volatility.

2. **Event Data Compilation**  
   Research and preparation of key geopolitical and economic events dataset.

3. **Bayesian Change Point Modeling**  
   Identification of statistically significant structural breaks using PyMC3.

4. **Results Interpretation**  
   Associating change points with key events and quantifying their impact.

5. **Dashboard Visualization**  
   Interactive frontend and backend for exploring the analysis results.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/kumsa-Mergia/changepoint-statistical-models.git
cd changepoint-statistical-models

pip install -r requirements.txt
````

## Usage

* Run the main analysis pipeline:

```bash
python main.py
```

* Launch the dashboard backend (Flask):

```bash
cd dashboard/backend
python app.py
```

* Launch the dashboard frontend (React):

```bash
cd dashboard/frontend
npm start
```

* Explore interactive analysis in Jupyter notebook:

```bash
jupyter notebook notebook/
```

## Future Work

* Incorporate macroeconomic data (GDP, inflation, exchange rates).
* Explore advanced time series models (VAR, Markov-Switching).
* Apply causal inference techniques for stronger attribution.

## Contributing

Contributions and feedback are welcome! Please open an issue or submit a pull request.

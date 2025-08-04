from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load data once on startup
df = pd.read_csv("../../data/BrentOilPrices.csv", parse_dates=["Date"], dayfirst=True)

# Convert Date to ISO format string for JSON serialization
df["Date"] = df["Date"].dt.strftime("%Y-%m-%d")

# Sample events - replace or load from your real events file
events = [
    {"date": "1990-08-01", "label": "Iraq invades Kuwait"},
    {"date": "2008-09-15", "label": "Lehman Brothers collapse"},
    {"date": "2020-03-01", "label": "COVID-19 pandemic"},
]

@app.route("/api/data")
def get_price_data():
    # Convert DataFrame to list of dicts
    data = df.to_dict(orient="records")
    return jsonify(data)

@app.route("/api/events")
def get_events():
    return jsonify(events)

if __name__ == "__main__":
    app.run(port=5000, debug=True)

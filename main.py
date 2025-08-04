# main.py
from src.data_loader import BrentOilDataLoader
from src.eda import BrentOilEDA
from src.change_point_model import ChangePointDetector

def run_pipeline():
    loader = BrentOilDataLoader("data/BrentOilPrices.csv")
    data = loader.load_data()

    eda = BrentOilEDA(data)
    stats = eda.calculate_summary_stats()

    model = ChangePointDetector(data)
    trace = model.run_model()

    print("Summary Stats:", stats)

if __name__ == "__main__":
    run_pipeline()

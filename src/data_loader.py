import pandas as pd
import numpy as np

class BrentOilData:
    def __init__(self, filepath: str):
        self.filepath = filepath
        self.df = None

    def load_data(self):
        # Load CSV
        self.df = pd.read_csv(self.filepath)
        
        # Try to auto-parse the date
        try:
            self.df['Date'] = pd.to_datetime(self.df['Date'], format='%d-%b-%y')
        except ValueError:
            # fallback if the format is different (e.g. 'Apr 22, 2020')
            self.df['Date'] = pd.to_datetime(self.df['Date'], errors='coerce')
            self.df.dropna(subset=['Date'], inplace=True)

        self.df.set_index('Date', inplace=True)
        self.df.sort_index(inplace=True)
        return self.df

    def compute_log_returns(self):
        if self.df is None:
            raise ValueError("Data not loaded. Call load_data() first.")
        
        self.df['Log_Return'] = np.log(self.df['Price']) - np.log(self.df['Price'].shift(1))
        self.df.dropna(subset=['Log_Return'], inplace=True)
        return self.df

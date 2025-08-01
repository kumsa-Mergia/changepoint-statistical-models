import matplotlib.pyplot as plt

class EDA:
    def __init__(self, df):
        self.df = df

    def plot_price(self):
        plt.figure(figsize=(12, 6))
        self.df['Price'].plot(title='Brent Oil Prices (USD/barrel)', color='blue')
        plt.ylabel("Price (USD)")
        plt.xlabel("Date")
        plt.grid(True)
        plt.show()

    def plot_log_returns(self):
        plt.figure(figsize=(12, 6))
        self.df['Log_Return'].plot(title='Log Returns of Brent Oil Prices', color='green')
        plt.ylabel("Log Return")
        plt.xlabel("Date")
        plt.grid(True)
        plt.show()
import pymc3 as pm
import numpy as np
import matplotlib.pyplot as plt
import arviz as az

class ChangePointDetector:
    def __init__(self, log_returns):
        self.log_returns = log_returns
        self.model = None
        self.trace = None
        self.n = len(log_returns)

    def build_model(self):
        with pm.Model() as model:
            tau = pm.DiscreteUniform('tau', lower=0, upper=self.n - 1)
            mu_1 = pm.Normal('mu_1', mu=0, sd=1)
            mu_2 = pm.Normal('mu_2', mu=0, sd=1)
            sd = pm.Exponential('sd', lam=1.0)

            idx = np.arange(self.n)
            mu = pm.math.switch(tau > idx, mu_1, mu_2)

            obs = pm.Normal('obs', mu=mu, sd=sd, observed=self.log_returns)

            self.model = model

    def run_sampling(self, samples=2000, tune=1000):
        with self.model:
            self.trace = pm.sample(samples, tune=tune, return_inferencedata=True)

    def plot_results(self):
        az.plot_trace(self.trace)
        az.plot_posterior(self.trace, var_names=["tau"])
        plt.show()

    def summary(self):
        return az.summary(self.trace)

import pandas as pd


df = pd.read_csv("fifa_audience.csv")

uefa_countries = df[df["confederation"] == "UEFA"]

audience_average = uefa_countries["tv_audience_share"].mean()

print(audience_average)

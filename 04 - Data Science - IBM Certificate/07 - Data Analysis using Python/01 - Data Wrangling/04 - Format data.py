# Convert value
df["city-mpg"] = 235 / df["city-mpg"]
df.rename(columns = {"city_mpg": "city-L/100km"}, inplace = True)

# Convert type
df["price"] = df["price"].astype("int")
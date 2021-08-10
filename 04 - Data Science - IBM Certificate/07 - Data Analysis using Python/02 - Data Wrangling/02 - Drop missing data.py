# axis = 0 - drop the row
# axis = 1 - drop the column
df.dropna()

df.dropna(subset=["price"], axis = 0. inplace = True)

# drop all rows that contain a NaN
df.dropna(axis = 0)
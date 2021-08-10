# df.replace(missing_value, new_value)

mean = df["normalize-losses"].mean()
df["normalize-losses"].replace(np.nan, mean)
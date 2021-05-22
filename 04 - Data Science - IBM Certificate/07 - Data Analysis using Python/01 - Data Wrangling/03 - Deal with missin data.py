# một vài cách để handle missing value
# - Drop missing value
# - Replace missing value
# - Leave it as missing data

# Drop
# dropna không làm thay đổi dataframe, nếu muốn thay đổi thì phải set inplace = true
# axis 0 bỏ row, axis 1 bỏ column
df.dropna(subset = ["price"], axis = 0, inplace = True)

# Replace
# df.replace(missing_value, new_value)

mean = df["normalized-losses"].mean()
df["normalized-losses"].replace(np.nan, mean)
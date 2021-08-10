# Bining is a way to group data

# divide price column into 3 group
bins = np.linspace(min(df['price']), max(df['price']), 4)

# add name
group_names = ['Low', 'Medium', 'High']

# add new column
df['price-binned'] = pd.cut(df['price'], bins, labes = group_names, include_lowest = True)
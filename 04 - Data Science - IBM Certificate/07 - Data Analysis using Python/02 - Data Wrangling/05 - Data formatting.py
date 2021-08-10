# Apply calculations to an entire column
df['city-mpg'] = 235/df['city-mpg']

# rename a column
df.rename(columns = {'city-mpg': 'city-L/100km'}, inplace = True)

# convert int datatype to float
df['price'] = df['price'].astype('float')
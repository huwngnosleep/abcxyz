# import model
from sklearn.linear_model import LinearRegression

# create model
model = LinearRegression()

# define the independent and dependent variable
X = df[['highway-mpg']]
Y = df['price']

# fit the model
model.fit(X, Y)

# obtain prediction
Yhat = model.predict(input)
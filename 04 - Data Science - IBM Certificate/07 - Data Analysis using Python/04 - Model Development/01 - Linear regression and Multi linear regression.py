# Model chỉ đơn giản là một cái hàm
# cho input thì nó sẽ predict được output

# Fit
# Fit là quá trình dựa vào một vài điểm có sẵn, sẽ tính ra hai tham số b0 và b1

# y = b0 + b1.x
# b0 - intercept
# b1 - coefficient of x

from sklearn.linear_model import LinearRegression
lm = LinearRegression()

X = df[['highway-mpg']]

# Single linear regression
y = df['price']
lm.fit(x, y)

Yhat = lm.predict(X)

# Multiple linear regression
z = df[['horsepower', 'curb-weight', 'engine-size', 'highway-mpg']]

lm.fit(z, df['price'])

Yhat = lm.predict(X)
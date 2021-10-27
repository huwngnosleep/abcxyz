# create poly X
from sklearn.preprocessing import PolynomialFeatures
from sklearn import linear_model, train_test_split
train_x = np.asanyarray(train[['ENGINESIZE']])
train_y = np.asanyarray(train[['CO2EMISSIONS']])

test_x = np.asanyarray(test[['ENGINESIZE']])
test_y = np.asanyarray(test[['CO2EMISSIONS']])

poly = PolynomialFeatures(degree=2)
train_x_poly = poly.fit_transform(train_x)
train_x_poly



# train the model
clf = linear_model.LinearRegression()
train_y_ = clf.fit(train_x_poly, train_y)



# The coefficients
print ('Coefficients: ', clf.coef_)
print ('Intercept: ',clf.intercept_)
from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x_data, y_data, test_size = 0.3, random_state = 0)

# cross validation
# cross validation is to divide training set into some of equal partitions
# then all of them will be use respectively for training and testing
#  [1 2 3] 4
#  [1 2 4] 3
#  ...
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, x_data, y_data, cv = 3)
np.mean(scores)

# cross_value_predict
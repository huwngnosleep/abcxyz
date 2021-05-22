import numpy as np

x = np.array([[3], [2], [2]])

# b1 = np.array([[1], [1], [1]])
# b2 = np.array([[0], [1], [2]])

b = np.array([[1, 0], [0, 1], [0, 1]])
b_trans = b.transpose()

bTb = np.dot(b_trans, b)
print("bTb: ", bTb)

bTb_ = np.array([[1, 0], [0, 2]])
bTx = np.dot(b_trans, x)

u = np.dot(b, np.dot(bTb_, bTx))
print("u: ", u)
# x = np.dot(
#     np.array([[1, 0], [1, 1], [1, 2]]),
#     np.array([[5, -3], [-3, 3]]),
#     # np.array([6, 0])
# )

# print(np.dot(x, np.array([6, 0])))
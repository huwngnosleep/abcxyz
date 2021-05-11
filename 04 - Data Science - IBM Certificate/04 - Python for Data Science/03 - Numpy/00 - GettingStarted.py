# numpy là thư viện giúp tính toán đại số trong code nhanh hơn

import numpy as np
# trong python không hỗ trợ array, nhưng numpy cần map list thành array
a = np.array([0, 1, 2, 3, 5])
# type(a) : numpy.ndarray
# a.dtype: dtype('int64')
# a.size: 5
# a.ndim: 1

#  cộng trừ nhân vector
u = np.array([1, 0])
v = np.array([0, 1])
z = u + v
# z: array([1, 1])

# thay vì code bình thường sẽ là
u = [1, 0]
v = [0, 1]
z = []
for(n, m) in zip(u, v):
    z.append(n + m)

# dot product
z = np.dot(u, v)
# z: 5
# Forward propagation
Forward propagation

Z[l] = W[l] . A[l-1] + b[l]

A[l] = g[l](Z[l])

# Matrix dimensions
W[l]: (n[l], n[l-1])
b[l]: (n[l], 1)
dW[l]: (n[l], n[l-1])
db[l]: (n[l], 1)

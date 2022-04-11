# When the dataset is too large, gradient descent will take too long to take a step
The idea of mini-batch gradient descent is we divide a large dataset into many smaller ones and do gradient descent with each of them.

This can make gradient descent take step faster, but will make noise in total lost computed.

Here is the algorithm:

![mini-match](mini-match.png)

Here is the plot to compare between batch and mini-batch algorithm

![mini-batch-plots](mini-batch-plots.png)

# Choosing batch size
If the batch size is too large (size = m), it will be batch gradient descent, and just take too long to take a step

If the batch size is too small (size = 1), you will loose speedup from vectorization

![choose-batch-size](choose-batch-size.png)

**Batch size should be the power of 2** for the computation mechanic of computers
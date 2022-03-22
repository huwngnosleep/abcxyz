L = 100
# sizes = [1, 3, 5, 10, 30, 50, 75]
# prices = [0.1, 0.4, 0.7, 1.4, 4.3, 7.1, 11.2]
sizes = [10, 30, 50, 75]
prices = [0.7, 1.4, 5.1, 8.2]


maxGlobal = 0
maxSoFarCache = {}


def maxRev(L: int, maxGlobal: int, maxSoFar: int) -> int:
    if L == 0:
        return 0
    if L < 0:
        return -100000000

    for i in range(0, len(prices), 1):
        price = prices[i]
        size = sizes[i]
        maxSoFar = max(maxSoFar, maxRev(L - size, maxGlobal, maxSoFar + price))

    print(maxSoFar)
    return maxSoFar


def maxRevenue_Recursive(L, sizes, prices):
    if L == 0:
        return 0
    if L < 0:
        return -100000000  # Just a large negative number will do
    k = len(sizes)
    # Let us implement the max of
    optionValues = [
        (prices[i] + maxRevenue_Recursive(L - sizes[i], sizes, prices))
        for i in range(k)
    ]
    # optionValues.append(0)  # also add 0 to cover the case where we waste
    bestValueSoFar = max(optionValues)
    return bestValueSoFar


maxRev(L, maxGlobal, 0)
# print(maxRevenue_Recursive(30, sizes, prices))
# print(maxSoFarCache)
# print(maxSoFar)

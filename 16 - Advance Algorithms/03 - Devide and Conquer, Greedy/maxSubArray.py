def minElement(arr, l, u):
    minE = 999999
    for i in range(l, u + 1):
        minE = min(minE, arr[i])
    return minE


def maxElement(arr, l, u):
    maxE = -999999
    for i in range(l, u + 1):
        maxE = max(maxE, arr[i])
    return maxE


def maxSubArr(arr, l, u):
    if u == l:
        return 0
    elif u == l + 1:
        return max(arr[u] - arr[l], 0)

    m = (l + u) // 2
    m1 = maxSubArr(arr, l, m)
    m2 = maxSubArr(arr, m + 1, u)

    y1 = maxElement(arr, m + 1, u)
    x1 = minElement(arr, l, m)

    return max(m1, m2, (y1 - x1))


print(maxSubArr([2, 1, 3, 8, 9, 7, -1, 6], 0, 7))

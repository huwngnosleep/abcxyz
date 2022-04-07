change = 25

coins = [1, 5, 10, 20]

def minCoins_memoize_1(x, lst):
    T = [0]*(x+1) # make a list of all zeros of size x + 1
    for i in range(1,x+1):
        opts = [1 + T[i - cj] for cj in lst if (i - cj >= 0)]
        opts.append(10000000) # so that the list is not empty. Or else, the next line will throw an exception
        T[i] = min(opts)
        print(opts)
        print(T)
    print(T[x])
    return T[x]

minCoins_memoize_1(change, coins)

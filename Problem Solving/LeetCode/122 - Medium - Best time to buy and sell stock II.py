class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0
        length = len(prices)
        for i in range(1, length):
            diff = prices[i] - prices[i - 1]
            if(diff > 0):
                result += diff
        return result

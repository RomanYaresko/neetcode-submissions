class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0

        max_profit: int = 0

        left: int = 0;
        right: int = 1;

        while right < len(prices):
            profit: int = prices[right] - prices[left]

            if profit > 0:
                max_profit = max(max_profit, profit)
            
            if prices[right] < prices[left]:
                left = right
            
            right += 1
        
        return max_profit
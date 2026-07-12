class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // Time complexity => O(n)
    // Space complexity => O(1)
    maxArea(heights: number[]): number {
        let maxAmount: number = 0;

        let leftIndex: number = 0;
        let rightIndex: number = heights.length - 1;

        while (leftIndex < rightIndex) {
            const amount: number = (rightIndex - leftIndex) * (heights[leftIndex] <= heights[rightIndex] ? heights[leftIndex] : heights[rightIndex]);
            
            if (maxAmount < amount) {
                maxAmount = amount;
            }

            if (heights[leftIndex] <= heights[rightIndex]) {
                leftIndex++;
            } else {
                rightIndex--;
            }
        }

        return maxAmount;
    }
}

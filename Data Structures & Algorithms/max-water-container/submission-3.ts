class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxAmount: number = 0;

        let leftIndex: number = 0;
        let rightIndex: number = heights.length - 1;

        while (leftIndex < rightIndex) {
            const amount = (rightIndex - leftIndex) * (heights[leftIndex] <= heights[rightIndex] ? heights[leftIndex] : heights[rightIndex]);
            
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

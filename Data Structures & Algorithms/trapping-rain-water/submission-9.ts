class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // Time complexity => O(n)
    // Space complexity => O(n)
    trap(height: number[]): number {
        let totalArea: number = 0;

        let leftIndex: number = 0;
        let rightIndex: number = height.length - 1;

        let maxLeft: number = height[leftIndex];
        let maxRight: number = height[rightIndex];

        while (leftIndex < rightIndex) {
            if (height[leftIndex] <= height[rightIndex]) {
                leftIndex++;
                const area = maxLeft - height[leftIndex];
                if (area > 0) {
                    totalArea += area;
                }
            } else {
                rightIndex--;
                const area = maxRight - height[rightIndex];
                if (area > 0) {
                    totalArea += area;
                }
            }

            maxLeft = Math.max(maxLeft, height[leftIndex]);
            maxRight = Math.max(maxRight, height[rightIndex]);
        }

        return totalArea;
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let stack: number[][] = [];
        let maxArea: number = 0;

        for (let i = 0; i < heights.length; i++) {
            const height = heights[i];
            let startIndex = i;

            while (stack.length) {
                if (stack[stack.length - 1][1] > height) {
                    const head = stack.pop();
                    startIndex = head[0];
                    maxArea = Math.max(maxArea, head[1] * (i - head[0]));
                } else {
                    break;
                }
            }

            stack.push([startIndex, height])
        }

        while (stack.length) {
            const head = stack.pop();
            maxArea = Math.max(maxArea, head[1] * (heights.length - head[0]));
        }

        return maxArea;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // O(3n) => O(n)
    productExceptSelf(nums: number[]): number[] {
        let prefixArray: number[] = [];
        let postfixArray: number[] = [];

        // O(n)
        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                prefixArray[i] = 1;
                continue;
            }

            prefixArray[i] = prefixArray[i - 1] * nums[i - 1];
        }

        // O(n)
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i == nums.length - 1) {
                postfixArray[i] = 1;
                continue;
            }

            postfixArray[i] = postfixArray[i + 1] * nums[i + 1];
        }

        let resultArray: number[] = [];
        // O(n)
        for (let i = 0; i < nums.length; i++) {
            resultArray[i] = prefixArray[i] * postfixArray[i];
        }

        return resultArray;
    }
}

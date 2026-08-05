class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let min: number = nums[0];
        let left: number = 0;
        let right: number = nums.length - 1;

        while (left <= right) {
            if (nums[left] <= nums[right]) {
                min = Math.min(min, nums[left]);
                break;
            }

            const middle = left + Math.floor((right - left) / 2);
            min = Math.min(min, nums[middle]);
            if (nums[middle] >= nums[left]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return min;
    }
}

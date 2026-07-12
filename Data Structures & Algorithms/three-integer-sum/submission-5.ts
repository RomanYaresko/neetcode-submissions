class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // Time complexity => O(n^2)
    // Space complexity => O(1) + Sorting space complexity (depends on JS engine)
    threeSum(nums: number[]): number[][] {
        nums.sort((a: number, b: number) => a - b);

        let result: number[][] = [];

        for (let i: number = 0; i < nums.length; i++) {
            const isNoMoreResults: boolean = nums[i] > 0;
            if (isNoMoreResults) {
                break;
            }

            const idDuplicate: boolean = i < 0 || nums[i] === nums[i - 1];
            if (idDuplicate) {
                continue;
            }

            const initialLeftIndex: number = i + 1;
            const initialRightIndex: number = nums.length - 1;
            
            let leftIndex: number = initialLeftIndex;
            let rightIndex: number = initialRightIndex;

            while (leftIndex < rightIndex) {
                const isLeftDuplicate: boolean = leftIndex > initialLeftIndex && nums[leftIndex] === nums[leftIndex - 1];
                const isRightDuplicate: boolean = rightIndex < initialRightIndex && nums[rightIndex] === nums[rightIndex + 1];
                if (isLeftDuplicate || isRightDuplicate) {
                    if (isLeftDuplicate){
                        leftIndex++;
                    }

                    if (isRightDuplicate){
                        rightIndex--;
                    }
                    
                    continue;
                }

                const sum: number = nums[i] + nums[leftIndex] + nums[rightIndex];
                
                if (sum === 0) {
                    result.push([nums[i], nums[leftIndex], nums[rightIndex]]);
                    leftIndex++;
                    rightIndex--;
                } else if (sum < 0) {
                    leftIndex++;
                } else if (sum > 0) {
                    rightIndex--;
                }
            }
        }

        return result;
    }
}
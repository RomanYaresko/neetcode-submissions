class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        console.log(nums);
        let result: number[][] = [];

        for (let i = 0; i < nums.length; i++) {
            const isNoMoreResults = nums[i] > 0;
            if (isNoMoreResults) {
                break;
            }

            const idDuplicate: boolean = i < 0 || nums[i] === nums[i - 1];
            if (idDuplicate) {
                continue;
            }

            const initialLeftIndex: number = i + 1;
            const initialRightIndex: number = nums.length - 1;
            
            let leftIndex = initialLeftIndex;
            let rightIndex = initialRightIndex;

            while (leftIndex < rightIndex) {
                const isLeftDuplicate = leftIndex > initialLeftIndex && nums[leftIndex] === nums[leftIndex - 1];
                const isRightDuplicate = rightIndex < initialRightIndex && nums[rightIndex] === nums[rightIndex + 1];
                if (isLeftDuplicate || isRightDuplicate) {
                    if (isLeftDuplicate){
                        leftIndex++;
                    }

                    if (isRightDuplicate){
                        rightIndex--;
                    }
                    
                    continue;
                }

                const sum = nums[i] + nums[leftIndex] + nums[rightIndex];
                
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
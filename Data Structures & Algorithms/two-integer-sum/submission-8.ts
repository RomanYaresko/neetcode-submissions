class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // O(n^2)
    twoSum(nums: number[], target: number): number[] {
        const seen: Map<number, number> = new Map()

        for (let i = 0; i < nums.length; i++) {
            const needed = target - nums[i]

            if (seen.has(needed)) {
                return [i, seen.get(needed)]
            }

            seen.set(nums[i], i)
        }
    }
}

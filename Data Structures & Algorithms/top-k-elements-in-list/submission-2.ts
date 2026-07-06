class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsFrequency: Map<number, number> = new Map()

        for (const num of nums) {
            if (numsFrequency.has(num)) {
                numsFrequency.set(num, numsFrequency.get(num) + 1)
            } else {
                numsFrequency.set(num, 1)
            }
        }

        const sortedNumsFrequency = [...numsFrequency.entries()].sort((a, b) => b[1] - a[1])
        
        const result: number[] = []
        for (let i = 0; i < k; i ++) {
            result.push(sortedNumsFrequency[i][0])
        }

        return result
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // n = number of values (n = nums.length)
    // m = number of distinct value (m <= n)
    // k = k attribute
    // O(1 + n + (m * logm) + 1 + k + 1) => O(m * logm)
    topKFrequent(nums: number[], k: number): number[] {
        // O(1)
        const numsFrequency: Map<number, number> = new Map()

        // O(n)
        for (const num of nums) {
            // O(1) on avarage
            if (numsFrequency.has(num)) {
                // O(1)
                numsFrequency.set(num, numsFrequency.get(num) + 1)
            } else {
                // O(1)
                numsFrequency.set(num, 1)
            }
        }

        // O(m + (m * logm)) => O(m * logm)
        const sortedNumsFrequency = [...numsFrequency.entries()].sort((a, b) => b[1] - a[1])
        
        // O(1)
        const result: number[] = []

        // O(k)
        for (let i = 0; i < k; i ++) {
            // O(1)
            result.push(sortedNumsFrequency[i][0])
        }

        // O(1)
        return result
    }
}

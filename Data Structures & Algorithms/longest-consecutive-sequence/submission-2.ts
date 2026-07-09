class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // O(n)
    longestConsecutive(nums: number[]): number {
        let maxSequenceLength = 0;
        // O(n)
        const numsSet: Set<number> = new Set(nums);

        // O(n) amortized: each number participates in a sequence traversal at most once
        for (const num of nums) {
            const isHead = !numsSet.has(num - 1)

            if (isHead) {
                let sequenceLength: number = 1;
                let currentElement = num;

                while (numsSet.has(currentElement + 1)) {
                    sequenceLength++;
                    currentElement++;
                }

                if (maxSequenceLength < sequenceLength) {
                    maxSequenceLength = sequenceLength
                }
            }
        }

        return maxSequenceLength;
    }
}

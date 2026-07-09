class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let maxSequenceLength = 0;
        const numsSet: Set<number> = new Set(nums);

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

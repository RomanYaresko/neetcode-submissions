class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const findNumberIndexFrom = (findNumber: number, fromNumberIndex: number): number | null => {
            let leftIndex: number = fromNumberIndex;
            let rightIndex: number = numbers.length - 1;

            while (leftIndex <= rightIndex) {
                const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
                const found = numbers[middleIndex];

                if (found === findNumber) {
                    return middleIndex;
                }else if (found > findNumber) {
                    rightIndex = middleIndex - 1;
                } else {
                    leftIndex = middleIndex + 1;
                }
            }

            return null;
        }

        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            const neededNumber = target - num;
            const neededNumberIndex = findNumberIndexFrom(neededNumber, i + 1);

            if (neededNumberIndex !== null) {
                return [i + 1, neededNumberIndex + 1]
            }
        }

        return [];
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // O(n + n) => O(n)
    encode(strs: string[]): string {
        // O(1)
        let resultArray: string[] = [];

        // O(n + 1) => O(n)
        for (const str of strs) {
            // O(1)
            resultArray.push(`${str.length}|${str}|`);
        }
        
        // O(n)
        return resultArray.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let resultArray: string[] = [];
        let strArray: string[] = Array.from(str);

        let rangeIndicatorIndex: number = 0
        let rangeIndicatorString: string = ""

        while(rangeIndicatorIndex < strArray.length) {
            rangeIndicatorString += strArray[rangeIndicatorIndex]
            if (strArray[rangeIndicatorIndex + 1] != "|") {
                rangeIndicatorIndex += 1
                continue
            }

            const rangeStartIndex: number = rangeIndicatorIndex + 2
            const rangeEndIndex: number = rangeStartIndex + Number(rangeIndicatorString)
            const range = strArray.slice(rangeStartIndex, rangeEndIndex)

            resultArray.push(range.join(""))
            rangeIndicatorIndex = rangeEndIndex + 1
            rangeIndicatorString = ""
        }

        return resultArray
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let filtered: string = s.trim().toLowerCase().replace(/[^a-z0-9]/gi, '');

        let startPointer = 0;
        let endPointer = filtered.length - 1;

        while (startPointer <= endPointer) {
            if (filtered.charAt(startPointer) != filtered.charAt(endPointer)) {
                return false;
            }

            startPointer++;
            endPointer--;
        }

        return true;
    }
}

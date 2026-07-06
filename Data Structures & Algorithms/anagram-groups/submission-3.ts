class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // O(n * k)
    groupAnagrams(strs: string[]): string[][] {
        const anagramGroups: Map<string, string[]> = new Map();

        // O(n * k)
        for (const str of strs) {
            
            // O(k)
            const count = new Array(26).fill(0);
            for (const c of str) {
                count[c.charCodeAt(0) - 97]++;
            }
            const key = count.join("#");

            // O(1)
            if (anagramGroups.has(key)) {
                // O(1)
                anagramGroups.get(key).push(str)
            } else {
                // O(1)
                anagramGroups.set(key, [str])
            }
        }

        return Array.from(anagramGroups.values());
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramGroups: Map<string, string[]> = new Map();

        for (const str of strs) {
            const key = str.split("").sort().join("")
            if (anagramGroups.has(key)) {
                anagramGroups.set(key, [...anagramGroups.get(key), str])
            } else {
                anagramGroups.set(key, [str])
            }
        }

        return Array.from(anagramGroups.values());
    }
}

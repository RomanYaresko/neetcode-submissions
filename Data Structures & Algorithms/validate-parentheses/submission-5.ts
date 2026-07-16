class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack: string[] = [];

        const openItems: Set<string> = new Set(["(", "{", "["]);
        const closeItems: Set<string> = new Set([")", "}", "]"]);

        const openCloseMap: Map<string, string> = new Map([
            ["(", ")"],
            ["{", "}"],
            ["[", "]"],
        ])

        for (const item of s) {
            if (openItems.has(item)) {
                stack.push(item);
            } else if (closeItems.has(item)) {
                const lastItem = stack.pop();
                if (openCloseMap.get(lastItem) !== item) {
                    return false;
                }
            }
        }

        return stack.length == 0;
    }
}

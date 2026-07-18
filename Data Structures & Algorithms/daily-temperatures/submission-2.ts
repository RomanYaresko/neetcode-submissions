class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        let monotonicStack: number[] = [];

        let result: number[] = [];
        for (let i = temperatures.length - 1; i >= 0; i--) {
            result.push(0);

            while (monotonicStack.length) {
                const head = monotonicStack[monotonicStack.length - 1];
                if (temperatures[head] <= temperatures[i]) {
                    monotonicStack.pop();
                } else {
                    result[result.length - 1] = head - i;
                    break;
                }
            }

            monotonicStack.push(i);
        }

        result.reverse()
        return result;
    }
}

class Solution {
    evalRPN(tokens: string[]): number {
        let operands: number[] = [];

        const operatorsMap: Map<string, (a: number, b: number) => number> = new Map([
            ["+", (a, b) => a + b],
            ["-", (a, b) => a - b],
            ["*", (a, b) => a * b],
            ["/", (a, b) => Math.trunc(a / b)],
        ])

        for (const token of tokens) {
            const isOperator: boolean = operatorsMap.has(token);

            if (isOperator) {
                const num1 = operands.pop();
                const num2 = operands.pop();
                const result = operatorsMap.get(token)(num2, num1);
                operands.push(result);
            } else {
                operands.push(Number(token));
            }
            console.log(operands);
        }

        return operands[0];
    }
}

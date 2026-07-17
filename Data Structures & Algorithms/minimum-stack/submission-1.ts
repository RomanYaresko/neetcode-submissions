type MinStackItem = {
    value: number;
    currentMinValue: number;
}

class MinStack {
    stack: MinStackItem[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const currentMinValue = this.isEmpty() ? val : Math.min(val, this.getMin());
        this.stack.push({value: val, currentMinValue: currentMinValue});
    }

    pop(): void {
        this.stack.pop();
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    top(): number | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.stack[this.stack.length - 1].value;
    }

    getMin(): number | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.stack[this.stack.length - 1].currentMinValue;
    }
}

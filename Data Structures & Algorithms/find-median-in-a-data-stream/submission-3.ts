class MedianFinder {
    nums: number[];

    constructor() {
        this.nums = [];
    }

    addNum(num: number) {
        this.nums.push(num);
        this.nums.sort((a, b) => a - b);
    }

    findMedian(): number {
        const isEven: boolean = this.nums.length % 2 === 0;
        if (isEven) {
            const middle = Math.floor(this.nums.length / 2) - 1;
            return (this.nums[middle] + this.nums[middle + 1]) / 2;
        }

        return this.nums[Math.floor(this.nums.length / 2)];
    }
}
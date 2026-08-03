class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const width = matrix[0].length;
        const heigth = matrix.length;

        let left: number = 0;
        let right: number = (width * heigth) - 1;

        while (left <= right) {
            const middle: number = left + Math.floor((right - left) / 2);
            const middleY: number = Math.ceil((middle + 1) / width) - 1;
            const middleX: number = middle - (middleY * width);

            const middleValue = matrix[middleY][middleX];
            if (middleValue === target) {
                return true;
            } else if (middleValue > target) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return false;
    }
}

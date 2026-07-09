class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        // O(n) | n = length of row
        const isValidRow = (rowIndex: number): boolean => {
            const exists: Map<string, boolean> = new Map();

            // O(n)
            for (const rowItem of board[rowIndex]) {
                // O(1)
                if (rowItem == '.') {
                    continue
                }

                // O(1)
                if (exists.get(rowItem) == true) {
                    return false
                } else {
                    exists.set(rowItem, true)
                }
            }

            return true
        }

        // O(n) | n = length of columns
        const isValidColumn = (columnIndex: number): boolean => {
            const exists: Map<string, boolean> = new Map();

            // O(n)
            for (let i = 0; i < board.length; i++) {
                // O(1)
                if (board[i][columnIndex] == '.') {
                    continue
                }

                // O(1)
                if (exists.get(board[i][columnIndex]) == true) {
                    return false
                } else {
                    exists.set(board[i][columnIndex], true)
                }
            }

            return true
        }

        // O(n) | n = size of sub box
        const isValidSubBox = (subBoxRowIndex: number, subBoxColumnIndex: number): boolean => {
            const exists: Map<string, boolean> = new Map();

            // O(n)
            for (let i = subBoxRowIndex; i < subBoxRowIndex + 3; i++) {
                for (let k = subBoxColumnIndex; k < subBoxColumnIndex + 3; k++) {
                    // O(1)
                    if (board[i][k] == '.') {
                        continue
                    }

                    // O(1)
                    if (exists.get(board[i][k]) == true) {
                        return false
                    } else {
                        exists.set(board[i][k], true)
                    }
                }
            }

            return true
        }

        for (let i = 0; i < board.length; i++) {
            if (!isValidRow(i)) {
                return false
            }

            for (let k = 0; k < board[0].length; k++) {
                if (!isValidColumn(i)) {
                    return false
                }

                if (i % 3 == 0 && k % 3 == 0) {
                    if (!isValidSubBox(i, k)) {
                        return false
                    }
                }
            }
        }

        return true
    }
}

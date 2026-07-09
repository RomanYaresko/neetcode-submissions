class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const isValidRow = (rowIndex: number): boolean => {
            const exists: Map<string, boolean> = new Map();
            for (const rowItem of board[rowIndex]) {
                if (rowItem == '.') {
                    continue
                }

                if (exists.get(rowItem) == true) {
                    return false
                } else {
                    exists.set(rowItem, true)
                }
            }

            return true
        }

        const isValidColumn = (columnIndex: number): boolean => {
            const exists: Map<string, boolean> = new Map();
            for (let i = 0; i < board.length; i++) {
                if (board[i][columnIndex] == '.') {
                    continue
                }

                if (exists.get(board[i][columnIndex]) == true) {
                    return false
                } else {
                    exists.set(board[i][columnIndex], true)
                }
            }

            return true
        }

        const isValidSubBox = (subBoxRowIndex: number, subBoxColumnIndex: number): boolean => {
            const exists: Map<string, boolean> = new Map();
            for (let i = subBoxRowIndex; i < subBoxRowIndex + 3; i++) {
                for (let k = subBoxColumnIndex; k < subBoxColumnIndex + 3; k++) {
                    if (board[i][k] == '.') {
                        continue
                    }

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
        }

        for (let i = 0; i < board[0].length; i++) {
            if (!isValidColumn(i)) {
                return false
            }
        }

        for (let i = 0; i < board.length; i += 3) {
            for (let k = 0; k < board[0].length; k += 3) {
                if (!isValidSubBox(i, k)) {
                    return false
                }
            }
        }

        return true
    }
}

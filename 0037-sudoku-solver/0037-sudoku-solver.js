/**
 * @param {character[][]} board
 * @return {void}
 */
var solveSudoku = function(board) {
     function isValid(row, col, num) {
        for (let j = 0; j < 9; j++) {
            if (board[row][j] === num) return false;
        }
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }

        return true;
    }

    function backtrack() {

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {

                if (board[i][j] === '.') {

                    for (let num = 1; num <= 9; num++) {

                        let digit = String(num);

                        if (isValid(i, j, digit)) {

                            board[i][j] = digit;

                            if (backtrack()) return true;

                            board[i][j] = '.';
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    backtrack();
};
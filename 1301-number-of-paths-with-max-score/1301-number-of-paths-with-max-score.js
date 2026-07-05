/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const MOD = 1000000007;
    const n = board.length;

    const score = Array.from({ length: n }, () => Array(n).fill(-1));

    const ways = Array.from({ length: n }, () => Array(n).fill(0));

    score[n - 1][n - 1] = 0;
    ways[n - 1][n - 1] = 1;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            if (board[i][j] === 'X') continue;
            if (i === n - 1 && j === n - 1) continue;

            let best = -1;
            let count = 0;

            const dirs = [
                [1, 0],  
                [0, 1],   
                [1, 1]    
            ];

            for (let [dx, dy] of dirs) {
                let x = i + dx;
                let y = j + dy;

                if (x >= n || y >= n) continue;
                if (score[x][y] === -1) continue;

                if (score[x][y] > best) {
                    best = score[x][y];
                    count = ways[x][y];
                } else if (score[x][y] === best) {
                    count = (count + ways[x][y]) % MOD;
                }
            }

            if (best === -1) continue;

            let val = 0;

            if (board[i][j] !== 'E') {
                val = Number(board[i][j]);
            }

            score[i][j] = best + val;
            ways[i][j] = count;
        }
    }

    if (ways[0][0] === 0) return [0, 0];

    return [score[0][0], ways[0][0]];
};
module.exports = function solveSudoku(sudoku, col = 0, row = 0, impsNum = []) {
	if (col > 8) col = 0, row++;
	if (row > 8) return sudoku;
	if (sudoku[row][col]) return solveSudoku(sudoku, col + 1, row) ? sudoku : false;
	for (let k = 0; k < 9; k++) {
		let kRow = Math.trunc(row / 3) * 3 + Math.trunc(k / 3);
		let kCol = Math.trunc(col / 3) * 3 + (k % 3);
		impsNum.push(sudoku[row][k], sudoku[k][col], sudoku[kRow][kCol]);
	}
	let posNum = [1, 2, 3, 4, 5, 6 ,7 ,8, 9].filter(elem => !impsNum.includes(elem));
	for (sudoku[row][col] of posNum) if (solveSudoku(sudoku, col + 1, row)) return sudoku;
	return sudoku[row][col] = 0;
}
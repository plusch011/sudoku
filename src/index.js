module.exports = function solveSudoku(sudoku) {
	let i = 0, j = 0;
	function check() {
		let arr = [];
		for (let k = 0; k < 9; k++) {
			let kJ = Math.trunc(j / 3) * 3 + Math.trunc(k / 3);
			let kI = Math.trunc(i / 3) * 3 + (k % 3);
			arr.push(sudoku[j][k], sudoku[k][i], sudoku[kJ][kI]);
		}
		return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(elem => !arr.includes(elem));
		// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		// for (let k = 0; k < 9; k++) {
		// 	let kJ = Math.trunc(j / 3) * 3 + Math.trunc(k / 3);
		// 	let kI = Math.trunc(i / 3) * 3 + (k % 3);
		// 	if (sudoku[j][k] && arr.includes(sudoku[j][k])) arr.splice(arr.indexOf(sudoku[j][k]), 1);//столбец
		// 	if (sudoku[k][i] && arr.includes(sudoku[k][i])) arr.splice(arr.indexOf(sudoku[k][i]), 1);//строка
		// 	if (sudoku[kJ][kI] && arr.includes(sudoku[kJ][kI])) arr.splice(arr.indexOf(sudoku[kJ][kI]), 1);
		// }
		// return arr;
	}
	function plusch(sudoku) {
		if (i > 8) i = 0, j++;
		if (j > 8) return sudoku;
		//если элемент был	
		if (sudoku[j][i]) {
			i++;
			if (plusch(sudoku)) return sudoku;
			if (--i < 0) i = 8, j--;
			return 0;
		}
		//если элемент пустой
		let posNum = check();
		for (let c = 0; c < posNum.length; c++) {
			sudoku[j][i++] = posNum[c];
			if (plusch(sudoku)) return sudoku;
		}
		sudoku[j][i--] = 0;
		if (i < 0) i = 8, j--;
		return 0;
	}
	return plusch(sudoku);
}

module.exports = function solveSudoku(sudoku) {

		let i = 0;
		let j = 0;

		function check() {
			let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

			sudoku[j].forEach( (item) => { //строка
				if (item > 0 && ~arr.indexOf(item)) arr.splice(arr.indexOf(item), 1);
			});

			sudoku.forEach((item) => { //столбец
				if (item[i] > 0 && ~arr.indexOf(item[i])) arr.splice(arr.indexOf(item[i]), 1);
			}); 
			for (let k = Math.floor(j / 3) * 3; k < Math.floor(j / 3 + 1) * 3; k++) {
				for (let n = Math.floor(i / 3) * 3; n < Math.floor(i / 3 + 1) * 3; n++) {
					if (sudoku[k][n] > 0 && ~arr.indexOf(sudoku[k][n])) arr.splice(arr.indexOf(sudoku[k][n]), 1);
				}
			}

			return arr;
		}

		function plusch(sudoku) {
		if(i > 8) i = 0, j++;
		if(j > 8) {
			return sudoku;
		}

		//если элемент был	
		if(sudoku[j][i]) { 
			i++;
			if (plusch(sudoku)) return sudoku;
			if(--i < 0) i = 8, j--;
			return 0;
		}

		//если элемент пустой
		let posNum = check();
		for (let c = 0; c < posNum.length; c++) {
			sudoku[j][i++] = posNum[c];
			if(plusch(sudoku)) return sudoku;
		}
		sudoku[j][i--] = 0;
		if(i < 0) i = 8, j--;
		return 0;
		}
		return plusch(sudoku);
	}

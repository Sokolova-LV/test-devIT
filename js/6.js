function findMinAndMultiply(matrix) {
    let min = Infinity;
    for (let row of matrix) {
        for (let num of row) {
            if (num < min) {
                num = min;
            }
        }
    }

    const resultMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        const newRow = [];
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] % 2 !== 0) {
                newRow.push(matrix[i][k] * min);
            } else {
                newRow.push(matrix[i][k]);
            }
        }

        resultMatrix.push(newRow);
    }

    return resultMatrix;
};

// Исходная матрица:

const originalMatrix = [
    [5, 3, 6],
    [7, 11, 2],
    [15, 9, 4]
];

console.log(findMinAndMultiply(originalMatrix));
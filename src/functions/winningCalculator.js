const rows = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 6, 12, 18, 24], // diagonal from top-left to bottom-right
  [4, 8, 12, 16, 20],
];

const cols = [
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24]
];

const checkWinningPattern = (selectedIndices) => {
  if (selectedIndices.length < 5) {
    return []
  }
  const selected = Object.keys(selectedIndices).map(Number);
  const winningPatterns = [];
  for (const row of rows) {
    if (checkSubset(selected, row)) {
      winningPatterns.push(row);
    }
  }

  for (const col of cols) {
    if (checkSubset(selected, col)) {
      winningPatterns.push(col);
    }
  }

  return winningPatterns;
}

const checkSubset = (parentArray, subsetArray) => {
  return subsetArray.every((el) => {
    return parentArray.includes(el)
  })
}

export default checkWinningPattern
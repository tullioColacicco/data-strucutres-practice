var searchMatrix = function (matrix, target) {
  let row = findRow(matrix, target);
  if (row === false) return false;
  console.log(row);
  let left = 0;
  let right = row.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (row[mid] === target) return true;
    if (target < row[mid]) right = mid - 1;
    else {
      left = mid + 1;
    }
  }
  return false;
};

function findRow(matrix, target) {
  let left = 0;
  let right = matrix.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let row = matrix[mid];
    if (target > row[row.length - 1]) {
      left = mid + 1;
    } else if (target < row[0]) {
      right = mid - 1;
    } else {
      return row;
    }
  }

  return false;
}

console.log(searchMatrix((matrix = [[1], [3]]), (target = 2)));

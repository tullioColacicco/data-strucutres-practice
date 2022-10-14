var rightSideView = function (root) {
  if (!root) return [];
  let answer = [];
  let stack = [root];
  while (stack.length) {
    let level = [];
    let size = stack.length;
    for (i = 0; i < size; i++) {
      let node = stack.shift();
      level.push(node.val);

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    let right = level[level.length - 1];
    answer.push(right);
  }
  return answer;
};

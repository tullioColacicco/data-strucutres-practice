var goodNodes = function (root) {
  let result = 0;
  function dfs(node, maxVal) {
    if (!node) return 0;

    if (node.val >= maxVal) {
      result++;
    }

    maxVal = Math.max(node.val, maxVal);
    dfs(node.left, maxVal);
    dfs(node.right, maxVal);
  }
  dfs(root, root.val);
  return result;
};

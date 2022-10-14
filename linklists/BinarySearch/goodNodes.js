var goodNodes = function (root) {
  function dfs(node, maxVal) {
    if (!node) return 0;
    let result = node.val >= maxVal ? 1 : 0;
    let maxVal = Math.max(node.val, maxVal);
    result += dfs(node.left, maxVal);
    result += dfs(node.right, maxVal);
  }
  return dfs(root, root.val);
};

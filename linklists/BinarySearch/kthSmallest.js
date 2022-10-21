var kthSmallest = function (root, k) {
  let arr = [];

  function dfs(root, k) {
    if (root.left) dfs(root.left, k);
    arr.push(root.val);
    if (root.right) dfs(root.right, k);
    return arr[k - 1];
  }
  return dfs(root, k);
};

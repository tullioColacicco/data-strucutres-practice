var isSubtree = function (root, subRoot) {
  const subTree = (node, subroot) => {
    if (!node && !subroot) return true;
    if ((node && !subroot) || (!node && subroot) || node.val !== subroot.val)
      return false;
    return (
      node.val == subroot.val &&
      subTree(node.left, subroot.left) &&
      subTree(node.right, subroot.right)
    );
  };

  if (!root) return false;
  const result = subTree(root, subRoot);
  if (result) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (c of word) {
    if (node[c] == null) node[c] = {};
    node = node[c];
  }
  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const traverse = (node, i) => {
    const char = word[i];

    if (i === word.length) return node.isWord || false;

    if (char == ".") {
      for (const key in node) {
        if (traverse(node[key], i + 1)) return true;
      }
    } else if (node[char]) return traverse(node[char], i + 1);

    return false;
  };

  return traverse(this.root, 0);
};

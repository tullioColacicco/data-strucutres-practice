var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (c of word) {
    if (node[c] == null) node[c] = {};
    node = node[c];
    console.log(node);
  }
  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (c of word) {
    if (node[c] == null) return false;
    node = node[c];
  }
  return node.isWord === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (c of prefix) {
    if (node[c] == null) return false;
    node = node[c];
  }
  return node != null;
};

let trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.insert("app"));
console.log(trie.search("apple"));
console.log(trie.startsWith(""));
console.log(trie);

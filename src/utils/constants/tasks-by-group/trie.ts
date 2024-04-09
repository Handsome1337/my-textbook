import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const TRIE_TASKS: TaskConfig[] = [
  {
    code: `class TrieNode {
  isEndOfWord = false;
  children = new Map();
}

class Trie {
  root = new TrieNode();

  insert(word) {
    let cur = this.root;

    for (const char of word) {
      if (!cur.children.has(char)) {
        cur.children.set(char, new TrieNode());
      }

      cur = cur.children.get(char);
    }

    cur.isEndOfWord = true;
  };

  search(word) {
    let cur = this.root;

    for (const char of word) {
      if (!cur.children.has(char)) {
        return false;
      }

      cur = cur.children.get(char);
    }

    return cur.isEndOfWord;
  };

  startsWith(prefix) {
    let cur = this.root;

    for (const char of prefix) {
      if (!cur.children.has(char)) {
        return false;
      }

      cur = cur.children.get(char);
    }

    return true;
  };
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startsWith('app')); // true
trie.insert('app');
console.log(trie.search('app')); // true`,
    difficulty: 'medium',
    id: 'implement-trie-prefix-tree',
    link: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
    name: 'Implement Trie (Prefix Tree)',
    subject: 'trie',
    tags: [TaskTag.HASH_TABLE, TaskTag.STRING, TaskTag.DESIGN, TaskTag.TRIE]
  },
  {
    code: `class TrieNode {
  isEndOfWord = false;
  children = new Map();
}

class WordDictionary {
  root = new TrieNode();

  addWord(word) {
    let cur = this.root;

    for (const char of word) {
      if (!cur.children.has(char)) {
        cur.children.set(char, new TrieNode());
      }

      cur = cur.children.get(char);
    }

    cur.isEndOfWord = true;
  };

  search(word) {
    return this.#dfs(word, 0, this.root);
  };

  #dfs(word, index, root) {
    let cur = root;

    for (let i = index; i < word.length; i++) {
      if (word[i] === '.') {
        for (const child of cur.children.values()) {
          if (this.#dfs(word, i + 1, child)) {
            return true;
          }
        }

        return false;
      }

      if (!cur.children.has(word[i])) {
        return false;
      }

      cur = cur.children.get(word[i]);
    }

    return cur.isEndOfWord;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.search('pad')); // false
console.log(wordDictionary.search('bad')); // true
console.log(wordDictionary.search('.ad')); // true
console.log(wordDictionary.search('b..')); // true`,
    difficulty: 'medium',
    id: 'design-add-and-search-words-data-structure',
    link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
    name: 'Design Add and Search Words Data Structure',
    subject: 'trie',
    tags: [TaskTag.STRING, TaskTag.DEPTH_FIRST_SEARCH, TaskTag.DESIGN, TaskTag.TRIE]
  }
];

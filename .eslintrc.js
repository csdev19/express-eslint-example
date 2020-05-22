module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 11
  },
  "rules": {
    "indent": ["error", 2],
    "id-length": ["error", { "max": 10 }],
    "semi": ["error", "always"]
  }
};

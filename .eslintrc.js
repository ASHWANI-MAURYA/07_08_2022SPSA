module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "standard"],
  // extends: ['standard'],
  // extends: ["airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "no-trailing-spaces": [0, { skipBlankLines: true }],
    indent: 2,
    "import/prefer-default-export": "off",
    "default-param-last": 0,
    "no-debugger": "off"
  }
};

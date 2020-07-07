module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/prop-types": 0,
    indent: ["warn", 2],
    "comma-dangle": ["error", "never"],
    semi: ["warn", "always"],
    quotes: ["warn", "double"]
  }
};

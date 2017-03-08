module.exports = {
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true
  },
  "rules": {
    "no-case-declarations": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};

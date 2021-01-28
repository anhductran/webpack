module.exports = {
  sourceType: "module",
  settings: {
    "import/resolver": {
      alias: [["@components", "./src/components"]],
    },
  },
  parser: "babel-eslint",
};

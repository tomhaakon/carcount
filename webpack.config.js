const path = require("path");

module.exports = {
  entry: "./src/main.js", // Update the path based on your project structure
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

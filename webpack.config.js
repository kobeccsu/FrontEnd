const path = require('path');

module.exports = {
  entry: './SyntaxSugar.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
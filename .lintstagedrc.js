const escape = require("shell-quote").quote

module.exports = {
  "*.{js?(on),ts?(x),scss,md,y?(a)ml,graphql,less}": filenames => [
    ...filenames.map(filename => `prettier --check "${escape([filename])}"`),
    ...filenames.map(filename => `git add "${filename}"`),
  ],
  "*.{.js,.jsx,.mjs,.d.ts,.ts,.tsx}": [
    "eslint -c ./.eslintrc.js --fix-dry-run",
  ],
  // '*.{less,css,scss}': ['stylelint'],
}

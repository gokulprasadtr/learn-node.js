const os = require("os");
const path = require("path");
// const math = require("./math");
const { add, sub, mul, div } = require("./math");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

console.log(add(6, 5));
console.log(sub(6, 5));
console.log(mul(6, 5));
console.log(div(6, 5));

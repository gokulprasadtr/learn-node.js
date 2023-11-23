const fs = require("fs");

// if folder exists show error message else create a new directory

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log(`Directory Created`);
  });
}
console.error(`Directory exists`);

// if folder exists remove it

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log(`Directory removed`);
  });
}

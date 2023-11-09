const path = require("path");

const absolute = path.resolve(__dirname, "content");
console.log(absolute);
console.log(path.basename(absolute));

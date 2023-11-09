// BUILD-IN Modules:
// OS
// PATH
// FS - file streaming
// http

const os = require("os");

console.log(os.userInfo());

const uptime = os.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
console.log(
  `Computer has been turned on for ${hours} hours and ${minutes} minutes`
);
console.log(os.totalmem());
console.log(os.freemem());

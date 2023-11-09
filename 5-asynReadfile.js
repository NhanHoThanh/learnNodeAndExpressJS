const { readFile, writeFile, appendFile } = require("fs");

readFile("./5.2-first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./5.3-second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        appendFile(
          //we can use append, or add {flag:a} next to the write
          "./5.1-content.txt",
          `here the result: ${first}, ${second}\n`, // {flag:a},
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log(result);
            }
          }
        );
      }
    });
  }
});

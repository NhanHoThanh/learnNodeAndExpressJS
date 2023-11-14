const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("content", "utf-8");
    const second = await readFilePromise("content", "utf-8");
    await writeFilePromise(content, `this is ${first} ${second}`);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
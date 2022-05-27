const fs = require("fs");

const file = fs.readFileSync("../markdown/info.md");

console.log(file);

document.getElementById("root").innerHTML = marked.parse(file);
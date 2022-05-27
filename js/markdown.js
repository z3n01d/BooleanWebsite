const fs = require("fs");

const file = fs.readFileSync("../markdown/info.md");

document.getElementById("root").innerHTML = marked.parse(file);
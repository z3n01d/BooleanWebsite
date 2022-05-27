const fs = require("fs");

const file = fs.readFileSync("../markdown/info.md");

document.getElementById("root").nodeValue = marked.parse(file);
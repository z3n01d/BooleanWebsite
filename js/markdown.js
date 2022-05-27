const showdown = require("showdown");
var converter = new showdown.Converter();

const fs = require("fs");

const file = fs.readFileSync("../markdown/info.md");

document.getElementById("root").innerHTML = converter.makeHtml(file);
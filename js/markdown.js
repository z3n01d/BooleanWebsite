var showdown = require("showdown");
var converter = new showdown.Converter();

var fs = require("fs");

var md = fs.readFileSync("../markdown/info.md");
var html = converter.makeHtml(md)

var body = document.getElementById("markdown")

body.innerHTML = html;
var fs = require("fs");
var showdown = require("showdown");
var converter = new showdown.Converter();

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        var md = fs.readFileSync("../markdown/info.md");
        var html = converter.makeHtml(md)

        var body = document.getElementById("markdown")
        
        console.log("Loading markdown...");
        console.log(html);

        body.innerHTML = html;

        console.log("Markdown ready!")
    };
};
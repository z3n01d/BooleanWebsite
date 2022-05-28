document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        require(["showdown","fs"],() => {
            const showdown = require("showdown");
            const fs = require("fs");

            console.log("Loading markdown...");

            var converter = new showdown.Converter();

            var md = fs.readFileSync("../markdown/info.md","utf-8");
            var html = converter.makeHtml(md);

            var body = document.getElementById("markdown");

            console.log(html);

            body.innerHTML = html;

            console.log("Markdown ready!");
        })
    }
}
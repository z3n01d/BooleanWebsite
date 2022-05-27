require(["fs","showdown"],() => {
    var converter = new showdown.Converter();

    var md = fs.readFileSync("../markdown/info.md","utf-8");
    var html = converter.makeHtml(md);

    var body = document.getElementById("markdown");
        
    console.log("Loading markdown...");
    console.log(html);

    body.innerHTML = html;

    console.log("Markdown ready!");
});
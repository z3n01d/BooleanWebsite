document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        require(["showdown","fs"],() => {
            console.log("Loading markdown...");

            var converter = new showdown.Converter();

            console.log("Converter created.")

            fs.readFile("../markdown/info.md","utf-8",(err,data) => {
                if (err) {
                    return console.log(err);
                }

                var html = converter.makeHtml(data);

                var body = document.getElementById("markdown");

                console.log(html);

                body.innerHTML = html;

                console.log("Markdown ready!");
            });
        })
    }
}
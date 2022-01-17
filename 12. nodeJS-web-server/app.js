const http = require("http");
const fs = require("fs");
const port = 3000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("Error File Not Found");
        } else {
            res.write(data);
        }
        res.end();
    });
};
http.createServer((req, res) => {
    res.writeHead(200, {
        constenType: "text/html",
    });
    const url = req.url;
    if (url === "/about") {
        renderHTML("./about.html", res);
    } else if (url === "/contact") {
        renderHTML("./contact.html", res);
    } else {
        // res.write("Hello World");
        renderHTML("./index.html", res);
    }
}).listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

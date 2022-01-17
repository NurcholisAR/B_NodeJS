const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

// Built-in middleware
app.use(express.static("public"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); // redirect bootstrap JS
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css")); // redirect CSS bootstrap
app.use("/js", express.static(__dirname + "/node_modules/popper.js/dist/umd")); // redirect CSS Pooper
app.use("/js", express.static(__dirname + "/node_modules/aos/dist")); //redirect AOS
app.use("/js", express.static(__dirname + "/node_modules/vivus/dist")); //redirect vivus
app.use(express.static("node_modules"));
app.get("/", (req, res) => {
    const Mahasiswa = [
        {
            nama: "A",
            email: "a@gmail.com",
        },
    ];
    res.render("index", {
        nama: "ujang",
        title: "Home",
        layout: "layouts/main-layout",
        Mahasiswa,
    });
});

app.get("/gallery", (req, res) => {
    res.render("gallery", {
        title: "Gallery",
        layout: "layouts/main-layout",
    });
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact",
        layout: "layouts/main-layout",
    });
});

app.use("/", (req, res) => {
    res.status(404);
    res.send("404");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
// gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

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

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
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

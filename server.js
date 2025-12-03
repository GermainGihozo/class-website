const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/students", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "students.html"));
});

app.get("/gallery", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "gallery.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

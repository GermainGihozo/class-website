const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// ROUTES — send HTML files
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/about.html"));
});

app.get("/students", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/students.html"));
});

app.get("/gallery", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/gallery.html"));
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

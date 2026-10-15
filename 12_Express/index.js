const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
});

app.get("/", (req, res) => {
    res.send("You contacted root path");
});

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("You contacted root path");
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send(`<h1>nothing searched</h1>`);
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});
"use strict"

const express = require("express");
const app = express();
const port = 3625;

app.use("/", express.static("public"));

app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`)
});
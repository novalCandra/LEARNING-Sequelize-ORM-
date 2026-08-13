require("dotenv").config()
const express = require("express");
const app = express();
const port =process.env.SERVER_PORT || 3000;


app.get("/", (req, res) => {
    res.send("LEARNING Api data")
})

app.listen(port, () => {
    console.log(`API BERJALAN PADA PORT : http://localhost:${port}`)
})
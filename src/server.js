// Here we configure the application server

// Reason for separation:
// Don't often need to start the server
// Can import the app without having to start the server

const express = require('express');

// Make an instance of the express server
const app = express();

// Start defininf routes: instance.verb(url, middleware/callback)
// GET localhost:3000/
app.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    })
});

module.exports = {
    app
}
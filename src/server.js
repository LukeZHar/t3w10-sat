// Here, we configure the application server

// Reason for separation:
// Don't often need to start the server
// Can import the app wirCan import the app without worrying about starting the server

// Import express
const express = require("express");

// Make an instance of the express server
const app = express();

// Buil-in middleware for server to receive JSON body data
app.use(express.json());

// Start defining routes: instance.verb(url, middleware/callback)
// GET localhost:3300/
app.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    })
});

const UserRoute = require("./routes/users.js");
app.use("/users", UserRoute);

app.use((error, req, res, next) => {
    console.log("Server threw an error: ", + error.message);

    res.json({
        status: 500,
        message: error.message,
        errorFull: JSON.stringify(error)
    })
});

module.exports = {
    app
}
const express = require("express");
const router = express.Router();

// GET localhost:3000/users
router.get("/", (req, res) => {
    // Database query to get the list of users

    // Attach the query result in the response body 
    res.json({
        data: [
            "Bob",
            "Alice",
            "Osman",
            "Luke",
            "Venita"
        ]
    })
});

const UserRoute = require("./routes/user.js");

app.use("/users", UserRoute); 

module.exports = {
    app
}
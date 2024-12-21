const express = require("express");

const router = express.Router();

// GET localhost:3300/users
router.get("/", (req, res) =>{
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
    });
});

// POST localhost:3300/users/signup
router.post("/signup", (req, res) => {
    // recievedUserData that recieves the data from the user request body 
    let recievedUserData = req.body;

    // Get the hashed password from the front-end and encrypt it
    recievedUserData.password = "EncryptedPassword";

    // Store the data to the database using a query
    let databaseResult = {...recievedUserData};

    // Send the newly created user data as a response for acknowledgment 
    res.json(databaseResult);

    
})

module.exports = router;
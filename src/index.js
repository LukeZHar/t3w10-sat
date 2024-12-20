// Here we initilise the server
const {app} = require('./server.js')

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
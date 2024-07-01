const express = require('express');
const app = express();

const v1Router = require('./v1/routes/index');


// checking if ther service run or not.
// app.get('/', (req, res) => {
//     res.send("API is running");
// });


//routes
app.use("/api/v1", v1Router);

// Server Listening

const PORT = 5000;

app.listen(PORT, () => 
    console.log(`Server running on port:http://localhost:${PORT}`)
);
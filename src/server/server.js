const express = require('express');

const app = express();


//run server
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}...`);
});
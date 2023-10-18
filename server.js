const express = require('express');

const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); 

app.use("/api/contacts", require("../mycontact-backend/routes/contactRoutes"));





app.listen(port, () => {

    console.log(`Server running on #${port}`);

});
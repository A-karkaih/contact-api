const express = require('express');
const errorHandler = require('./cntrollers/middleware/errorHandler');
const connectDb = require("../mycontact-backend/Config/dbConnection")
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

connectDb();
app.use(express.json()); 

app.use("/api/contacts", require("../mycontact-backend/routes/contactRoutes"));

app.use(errorHandler);





app.listen(port, () => {

    console.log(`Server running on #${port}`);

});

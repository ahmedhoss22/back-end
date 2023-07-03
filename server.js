require("dotenv").config();
const express = require("express");
const dbConnection = require("./config/db.connection")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require('./routes/index'));
const port = process.env.PORT || 5000;
app.listen(port, () => {
    dbConnection(), console.log(`Server is running on http://localhost:${port}`);
});

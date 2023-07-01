const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const helmet = require("helmet")
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
dotenv.config()

app.use(cors());
app.use(helmet());
app.use(express.json())
app.use(cookieParser());
const url = process.env.DB_URL
const courseRouter = require('./routes/course.route')
app.use('/course',courseRouter)
// app.use('/course/img',express.static('./uploads/courses'))

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected !!!!");
}).catch((err) => {
    console.log(err);
    console.log("Database NOT CONNECTED");
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => { console.log(`App is running on port ${PORT}`); })
const express=require('express')
const app = express()
const cors=require('cors')
const dotenv=require('dotenv')
const helmet =require("helmet")
const mongoose=require('mongoose')
const getlogger=require('./services/logger')
const logger=getlogger("server")
const cookieParser=require("cookie-parser")
const courseRouter=require('./routes/course.route')
dotenv.config()
app.use(cors());
app.use(helmet());
app.use(express.json())
app.use(cookieParser());
const url=process.env.DB_URL


app.use('/uploads/courses',express.static('uploads/courses'))
app.use('/api/course',courseRouter)

app.all('*', (req,res) => {
    logger.error("This Route is not defined")
        res.status(404).json({
            status : 404,
            message : "Page not Found"
        });
});

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected !!!!");
}).catch((err) => {
    console.log(err);
    logger.error("Database NOT CONNECTED");
})


const PORT=process.env.PORT || 5000
app.listen(PORT , ()=>{console.log(`App is running on port ${PORT}`);})

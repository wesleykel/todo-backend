import express from "express"
import cors from "cors"
import chalk from "chalk"
import todo from "./routes/todo.js"
import * as dotenv from 'dotenv';
import morgan from "morgan"

dotenv.config();
const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(morgan(chalk.white.bgCyanBright(':date :method ":url"')))
app.use(function(req, res,next){
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();


})
const PORT = process.env.PORT || 3000;


app.use(cors())

app.use("/todo", todo)


app.get('/', (req, res) => {
  res.send('Welcome to Express')
})

app.listen(PORT, () => {
  console.log(chalk.white.bgCyanBright(`listening on port`), chalk.red.bold.underline(`${PORT}`)) 
})
import express from "express"
import cors from "cors"
import chalk from "chalk"
import todo from "./routes/todo.js"
const app = express()
const PORT = 3000



app.use(cors())

app.use("/todo", todo)


app.get('/', (req, res) => {
  res.send('Welcome to Express')
})

app.listen(PORT, () => {
  console.log(chalk.white.bgCyanBright(`listening on port`), chalk.red.bold.underline(`${PORT}`)) 
})
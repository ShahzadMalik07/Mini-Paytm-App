const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const userRouter = require("./routes/user")
const accountRouter = require("./routes/account")

const cors = require("cors")
app.use(bodyParser.json())
app.use(cors())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/account", accountRouter)




app.listen(3000)
const express = require('express')
const router = require('./router')
const cors = require('cors')
const connectDatabase = require('./configs/mongooseSetup')
connectDatabase()
require('./configs/passportSetup')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)


app.listen(5000, () => console.log('server is running at 5000'))
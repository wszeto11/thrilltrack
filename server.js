const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.use('/api', routes);

//Comment back in when we deploy via Heroku
// app.use(express.static(`${__dirname}/client/build`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//Comment back in when we deploy via Heroku
// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
// })


app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`))
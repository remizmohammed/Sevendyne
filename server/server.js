import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import schema from './models/index'
import createApi from './api/index'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.text())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
  next();
});


app.get('/', (req, res) => {
  res.send('nodejs done!')
})


createApi(app)

schema.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 8080, function () {
        console.log('connected')
    })
})
// app.js
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as http from 'http'
// api.js for the routes
import api from './api'
const app = express()
// body parsing middleware
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
// all routes are falling back into api.js
app.use('/', api)
// HTTP port setting
const port = process.env.PORT || '3000'
app.set('port', port)
// HTTP server creation
const server = http.createServer(app)
// listening all incoming requests on the set port
server.listen(port, () => console.log(`backend running on port:${port}`))

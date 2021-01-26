import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import artistRouter from './routes/artists'
import albumRouter from './routes/albums'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/artists', artistRouter)
app.use('/albums', albumRouter)
app.listen(8080, () => console.log('app running on port 8080!'))

import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import artistRouter from './routes/artists'

const app = express()
app.use(cors())

app.use('/artists', artistRouter)

app.listen(8080, () => console.log('app running on port 8080!'))

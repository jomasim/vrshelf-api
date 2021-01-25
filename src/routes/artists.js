import express from 'express'
const artistRouter = express.Router()
import artistController from '../controllers/artistController'

artistRouter.get('/', (req, res) => artistController.artist_list(req, res))

export default artistRouter

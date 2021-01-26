import express from 'express'
import artistController from '../controllers/artistController'
import validate from '../validators'

const artistRouter = express.Router()

artistRouter.get('/', (req, res) => artistController.artist_list(req, res))
artistRouter.post('/', validate.artist, (req, res) =>
  artistController.add_artist(req, res)
)

export default artistRouter

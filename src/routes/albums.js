import express from 'express'
import validate from '../validators'
import albumController from '../controllers/albumController'

const albumRouter = express.Router()

albumRouter.get('/', (req, res) => albumController.album_list(req, res))
albumRouter.post('/', validate.album, (req, res) =>
  albumController.addAlbum(req, res)
)

export default albumRouter

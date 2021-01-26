import { v4 as uuidv4 } from 'uuid'
import { albums } from '../mockdata'
export default {
  album_list: (req, res) => {
    return res.send(albums).status(200)
  },
  addAlbum: (req, res) => {
    const { name, artistId } = req.body

    const data = {
      id: uuidv4(),
      name,
      artistId
    }

    albums.unshift(data)
    return res.status(201).json({ message: 'album added successfully' })
  }
}

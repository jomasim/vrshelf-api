import { artists } from '../storage'
import { v4 as uuidv4 } from 'uuid'

export default {
  artist_list: (req, res) => {
    return res.status(200).json(artists)
  },
  add_artist: (req, res) => {
    const { name } = req.body
    const index = artists.findIndex(artist => artist.name === name)
    if (index >= 0) {
      return res.status(422).json({ message: 'artist already exists' })
    }

    const data = {
      id: uuidv4(),
      name
    }

    artists.unshift(data)
    return res.status(201).json({ message: 'artist added successfully' })
  }
}

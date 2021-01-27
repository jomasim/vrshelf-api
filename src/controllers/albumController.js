import { v4 as uuidv4 } from 'uuid'
import lastfm from '../lastfm'
import { albums, artists } from '../storage'
export default {
  album_list: (req, res) => {
    return res.send(albums).status(200)
  },
  addAlbum: (req, res) => {
    const { name, artistId } = req.body
    const index = artists.findIndex(artist => artist.id === artistId)

    if (index === -1)
      return res
        .status(422)
        .json({ message: 'artist selected is not in the list' })

    const album = {
      id: uuidv4(),
      name,
      artistId
    }

    const { name: artistName } = artists[index]
    lastfm.albumInfo({ name, artistName }, (err, data) => {
      if (err) return res.status(422).json({ message: 'album does not exist' })
      album['albumInfo'] = data
      albums.unshift(album)
      return res.status(201).json({ message: 'album added successfully' })
    })
  }
}

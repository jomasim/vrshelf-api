import Joi from '@hapi/joi'
const schemas = {
  artist: Joi.object().keys({
    name: Joi.string()
      .required()
      .messages({
        'string.base': 'invalid type, name should be a string',
        'string.empty': 'please enter name',
        'any.required': 'name is required'
      })
  }),
  album: Joi.object().keys({
    name: Joi.string()
      .required()
      .messages({
        'string.base': 'invalid type, name should be a string',
        'string.empty': 'please enter album name',
        'any.required': 'album name is required'
      }),
    artistId: Joi.string()
      .required()
      .messages({
        'string.base': 'invalid type, name should be a string',
        'string.empty': 'artist is required',
        'any.required': 'artist is required'
      })
  })
}

export default {
  artist: (req, res, next) => {
    const { error } = schemas.artist.validate(req.body)
    if (error)
      return res.status(400).json({ message: error.details[0].message })
    next()
  },
  album: (req, res, next) => {
    const { error } = schemas.album.validate(req.body)
    if (error)
      return res.status(400).json({ message: error.details[0].message })
    next()
  }
}

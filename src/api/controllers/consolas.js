const consolas = require('../models/consolas')

const getConsolas = async (req, res, next) => {
  try {
    const consolas = await consolas.find().populate('juegos')
    return res.status(200).json(consolas)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}
const getConsolasById = async (req, res, next) => {
  try {
    const { id } = req.params
    const consolas = await consolas.findById(id).populate('juegos')
    return res.status(200).json(consolas)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postConsolas = async (req, res, next) => {
  try {
    const newConsolas = new consolas(req.body)
    const consolasSaved = await newConsolas.save()
    return res.status(201).json(consolasSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putConsolas = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldConsolas = await consolas.findById(id)
    const newConsolas = new consolas(req.body)
    newConsolas._id = id
    newConsolas.juegos = [...oldConsolas.juegos, ...req.body.juegos]
    const consolasUpdated = await consolas.findByIdAndUpdate(id, newConsolas, {
      new: true
    })
    return res.status(200).json(consolasUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteConsolas = async (req, res, next) => {
  try {
    const { id } = req.params
    const consolasDeleted = await consolas.findByIdAndDelete(id)
    return res.status(200).json(consolasDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getConsolas,
  getConsolasById,
  postConsolas,
  putConsolas,
  deleteConsolas
}

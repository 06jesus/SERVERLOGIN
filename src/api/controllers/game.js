const Game = require('../models/game')

const getGames = async (req, res, next) => {
  try {
    const allGames = await Game.find()
    return res.status(200).json(allGames)
  } catch (error) {
    return res.status(400).json('Ha fallado la petión')
  }
}
const getGameAdmin = async (req, res, next) => {
  try {
    const game = await Game.find({ verified: false })
    return res.status(200).json(game)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}
const getGameOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const game = await Game.findById(id)
    return res.status(200).json(game)
  } catch (error) {
    return res.status(400).json('Error')
  }
}
const postGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body)
    // if (req.user.rol === 'admin') {
    //   newGame.verified = true
    // } else {
    //   newGame.verified = false
    // }
    const gameSaved = await newGame.save()
    return res.status(201).json(gameSaved)
  } catch (error) {
    return res.status(400).json('error')
  }
}
const updateGame = async (req, res, next) => {
  try {
    const { id } = req.params
    const newGame = new Game(req.body)
    newGame._id = id
    const up = await Game.findByIdAndUpdate(id, newGame, { new: true })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('error')
  }
}
const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params
    const gameDeleted = await Game.findByIdAndDelete(id)
    return res.status(200).json(gameDeleted)
  } catch (error) {
    return res.status(400).json('error')
  }
}
module.exports = {
  getGames,
  getGameAdmin,
  getGameOne,
  postGame,
  updateGame,
  deleteGame
}

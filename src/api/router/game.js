const {
  getGames,
  postGame,
  updateGame,
  deleteGame,
  getGameOne,
  getGameAdmin
} = require('../controllers/game')
const gamesRouter = require('express').Router()
gamesRouter.get('/', getGames)
gamesRouter.get('/', getGameAdmin)
gamesRouter.get('/:id', getGameOne)
gamesRouter.post('/', postGame)
gamesRouter.put('/:id', updateGame)
gamesRouter.delete('/:id', deleteGame)

module.exports = gamesRouter

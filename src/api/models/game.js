const mongoose = require('mongoose')
const gameSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imgURL: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: {
      type: String,
      required: true,
      enum: ['accion', 'aventuras', 'miedo', 'coches', 'desportes']
    }
  },
  {
    timestamps: true,
    collection: 'games'
  }
)
const Game = mongoose.model('games', gameSchema, 'games')
module.exports = Game

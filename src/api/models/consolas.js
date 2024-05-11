const mongoose = require('mongoose')

const consolasSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    juegos: [{ type: mongoose.Types.ObjectId, ref: 'juegos', required: false }]
  },
  {
    timestamps: true,
    collection: 'consolas'
  }
)
const consolas = mongoose.model('consolas', consolasSchema, 'consolas')
module.exports = consolas

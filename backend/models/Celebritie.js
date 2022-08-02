const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritieSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  vecteur_image: { type: Array, required: true },
}, {
  timestamps: true,
});

const Celebritie = mongoose.model('celebrities', celebritieSchema);

module.exports = Celebritie;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritieSchema = new Schema({
  name: { type: String, required: true },
  categorie: { type: String, required: true },
  images: { type: Array, required: true },
});

const Celebritie = mongoose.model('celebrities', celebritieSchema);

module.exports = Celebritie;
var mongoose = require('mongoose');

var OfferSchema = new mongoose.Schema({
  titulo : String,
  descripcion : String,
  cargo : String,
  informacion : String,
  salario : String
});

module.exports = mongoose.model('Offer', OfferSchema);

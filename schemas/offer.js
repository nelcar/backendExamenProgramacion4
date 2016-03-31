var mongoose = require('mongoose');

var offerSchema = new mongoose.Schema({
  titulo : String,
  descripcion : String,
  cargo : String,
  informacion : String,
  salario : String
});

module.exports = mongoose.model('offer', offerSchema);

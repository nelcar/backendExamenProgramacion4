var offer = require('../schemas/offer');

exports.getoffers = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var offers = offer.find({});
    reply(offers);
  }
}

exports.createoffer = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var newoffer = new offer({
      titulo: request.payload.titulo,
      descripcion: request.payload.descripcion,
      cargo : request.payload.cargo,
      informacion : request.payload.informacion,
      salario : request.payload.salario
    });
    newoffer.save();
    console.log('offer saved');
    return reply('ok');
  }
}

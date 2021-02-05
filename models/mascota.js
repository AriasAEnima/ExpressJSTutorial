const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema =   new Schema({
    nombre: String,
    tamano: String
})

const Mascota =  mongoose.model('Mascota',mascotaSchema,'mascota');

module.exports =    Mascota;
'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var SiloSchema = new Schema({

	nombre:    { type: String, required: false },
	alimento:  { type: Schema.Types.ObjectId,ref:'Alimento', required: false }, 
	capacidad: { type: Number, required: false },
	saldo:     { type: Number, required: false },
	lim_noti:  { type: Number, required: false }
	
},{ collection: 'silo'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Silo', SiloSchema);
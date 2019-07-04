'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var TipopezSchema = new Schema({

	nombre: { type: String, required: false },
	origen: { type: String, required: false }, 
	grupo:  { type: String, required: false }
	
},{ collection: 'tipopez'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Tipopez', TipopezSchema);
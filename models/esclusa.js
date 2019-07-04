'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var EsclusaSchema = new Schema({

	nombre: { type: String,  required: false },
	estado: { type: Boolean, required: false }, 
	al_oc:  { type: Boolean, required: false }
	
},{ collection: 'esclusa'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Esclusa', EsclusaSchema);
'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var AlimentoSchema = new Schema({

	nombre:   { type: String,  required: false },
	empresa:  { type: String,  required: false }, 
	codigo:   { type: String,  required: false },
	medicado: { type: Boolean, required: false },
	ppk:      { type: Number,  required: false }
	
},{ collection: 'alimento'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Alimento', AlimentoSchema);
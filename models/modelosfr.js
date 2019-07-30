'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var ModelosfrSchema = new Schema({

	especie:   { type: String,  required: false },
	c1: { type: Number,  required: false }, 
	c2: { type: Number,  required: false },
	a0: { type: Number,  required: false },
	a1: { type: Number,  required: false },
	a2: { type: Number,  required: false },
	a3: { type: Number,  required: false },
	a4: { type: Number,  required: false },
	a5: { type: Number,  required: false },
	a6: { type: Number,  required: false },
	a7: { type: Number,  required: false },
	b0: { type: Number,  required: false },
	b1: { type: Number,  required: false },
	b2: { type: Number,  required: false },
	b3: { type: Number,  required: false },
	b4: { type: Number,  required: false },
	b5: { type: Number,  required: false },
	b6: { type: Number,  required: false },
	b7: { type: Number,  required: false },

	
},{ collection: 'modelosfr'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Modelosfr', ModelosfrSchema);
'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var SelectorSchema = new Schema({

	nombre:   { type: String,  required: false },
	pos: 	  { type: Number,  required: false },
	pos_max:  { type: Number,  required: false }, 
	pos_obj:  { type: Number,  required: false },
	estado:   { type: Boolean, required: false },
	dir: 	  { type: Boolean, required: false },
	t_pos: 	  { type: Number,  required: false },
	al_oc: 	  { type: Boolean, required: false },
	al_calib: { type: Boolean, required: false }
	
},{ collection: 'selector'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Selector', SelectorSchema);
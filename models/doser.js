'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var DoserSchema = new Schema({

	nombre:    { type: String,  required: false },
	linea:     { type: Schema.Types.ObjectId,ref:'Linea',  required: false }, 
	esclusa:   { type: Schema.Types.ObjectId,ref:'Esclusa',required: false },
	silo:      { type: Schema.Types.ObjectId,ref:'Silo',   required: false },
	estado:    { type: Boolean, required: false },
	al_oc:     { type: Boolean, required: false },
	corriente: { type: Number,  required: false },
	hz:        { type: Number,  required: false },
	calib_x2:  { type: Number,  required: false },
	calib_x:   { type: Number,  required: false },
	calib_c:   { type: Number,  required: false }
	
},{ collection: 'doser'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Doser', DoserSchema);
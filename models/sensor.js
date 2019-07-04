'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var SensorSchema = new Schema({

	nombre: { type: String, required: false },
	tipo:   { type: String, required: false }, 
	valor:  { type: Number, required: false },
	min:    { type: Number, required: false },
	max:    { type: Number, required: false },
	unidad: { type: String, required: false },
	lim_up: { type: Number, required: false },
	lim_dw: { type: Number, required: false },
	posx:   { type: Number, required: false },
	posy:   { type: Number, required: false },
	
},{ collection: 'sensor'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Sensor', SensorSchema);
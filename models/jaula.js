'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var JaulaSchema = new Schema({

	nombre:        { type: String,  required: false },
	linea:    { type: Schema.Types.ObjectId,ref:'Linea',    required: false }, 
	doser:    { type: Schema.Types.ObjectId,ref:'Doser',    required: false },
	temp:     { type: Schema.Types.ObjectId,ref:'Sensor',   required: false },
	oxigeno:  { type: Schema.Types.ObjectId,ref:'Sensor',   required: false },
	tipopez:  { type: Schema.Types.ObjectId,ref:'Tipopez',  required: false },
	obj:           { type: Number,  required: false },
	obj_ciclo:     { type: Number,  required: false },
	en_ciclo:      { type: Boolean, required: false },
	estado:        { type: Boolean, required: false },
	dado:  		   { type: Number,  required: false },
	cuenta_ciclos: { type: Number,  required: false },
	intensidad:    { type: Number,  required: false },
	tipo_tasa:     { type: Number,  required: false },
	f_act:         { type: Number,  required: false },
	f_int:         { type: Number,  required: false },
	peces:         { type: Number,  required: false },
	peso:          { type: Number,  required: false },
	orden:         { type: Number,  required: false },
	pos_selector:  { type: Number,  required: false },
	posx:          { type: Number,  required: false },
	posy:          { type: Number,  required: false },
	
},{ collection: 'jaula'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Jaula', JaulaSchema);
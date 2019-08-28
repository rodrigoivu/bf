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
	kg_tot:        { type: Number,  required: false },
	kg_visita:     { type: Number,  required: false },
	en_ciclo:      { type: Boolean, required: false },
	estado:        { type: Boolean, required: false },
	dado:  		   { type: Number,  required: false },
	visitas:       { type: Number,  required: false },
	visita_actual: { type: Number,  required: false },
	kg_min:        { type: Number,  required: false },
	fa_sfr:        { type: Number,  required: false },
	ppv:           { type: Number,  required: false },
	ppm:           { type: Number,  required: false },
	peces:         { type: Number,  required: false },
	peso:          { type: Number,  required: false },
	orden:         { type: Number,  required: false },
	pos_selector:  { type: Number,  required: false },
	tpo_bw_silo:   { type: Number,  required: false },
	tpo_silo_sel:  { type: Number,  required: false },
	tpo_sel_jaula: { type: Number,  required: false },
	posx:          { type: Number,  required: false },
	posy:          { type: Number,  required: false },
	tipo:          { type: String,  required: false }, 
	largo:         { type: Number,  required: false },
	ancho:         { type: Number,  required: false },
	alto:          { type: Number,  required: false },
	diametro:      { type: Number,  required: false },
	min_visita:    { type: Number,  required: false },
	hz_blower:     { type: Number,  required: false },
},{ collection: 'jaula'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Jaula', JaulaSchema);
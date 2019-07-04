'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var BlowerSchema = new Schema({

	nombre:      { type: String,  required: false },
	presion:     { type: Schema.Types.ObjectId,ref:'Sensor',  required: false }, 
	hz:          { type: Number,  required: false },
	rpm:         { type: Number,  required: false },
	al_oc:       { type: Boolean, required: false },
	corriente:   { type: Number,  required: false },
	estado:      { type: Boolean, required: false },
	pid:         { type: Boolean, required: false },
	caudal:      { type: Number,  required: false },
	t_run_correa:{ type: Number,  required: false },
	t_run_filtro:{ type: Number,  required: false },
	t_correa: 	 { type: Number,  required: false },
	t_filtro:    { type: Number,  required: false }
	
},{ collection: 'blower'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Blower', BlowerSchema);
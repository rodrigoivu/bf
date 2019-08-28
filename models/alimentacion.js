'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var AlimentacionSchema = new Schema({

	jaula:   { type: Schema.Types.ObjectId,ref:'Jaula',  required: false },
	ts:      { type: Date,   required: false }, 
	grs:     { type: Number, required: false },
	kg_min:  { type: Number, required: false },
	ppm:     { type: Number, required: false },
	ppv:     { type: Number, required: false }
	
},{ collection: 'alimentacion'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Alimentacion', AlimentacionSchema);
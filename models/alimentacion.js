'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var AlimentacionSchema = new Schema({

	jaula:      { type: Schema.Types.ObjectId,ref:'Jaula',  required: false },
	ts:         { type: Date,   required: false }, 
	cantidad:   { type: Number, required: false },
	intensidad: { type: Number, required: false }
	
},{ collection: 'alimentacion'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Alimentacion', AlimentacionSchema);
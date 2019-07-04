'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var SensoresSchema = new Schema({
	sensor: { type: Schema.Types.ObjectId,ref:'Sensor',required: true },
	ts:     { type: Date,   required: false }, 
	valor:  { type: Number, required: false }
},{ collection: 'sensores'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Sensores', SensoresSchema);
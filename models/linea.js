'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var LineaSchema = new Schema({

	nombre:   { type: String,  required: false },
	color:    { type: String,  required: false }, 
	blower:   { type: Schema.Types.ObjectId,ref:'Blower',   required: false },
	selector: { type: Schema.Types.ObjectId,ref:'Selector', required: false },
	jaula:    { type: Schema.Types.ObjectId,ref:'Jaula',    required: false } // id de jaula actual en ciclo o aliemntando
	
},{ collection: 'linea'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Linea', LineaSchema);
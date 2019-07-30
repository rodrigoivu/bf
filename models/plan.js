'use strict'
var mongoose = require('mongoose');
//var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var PlanSchema = new Schema({

	especie:      { type: String,  required: false },
	temperatura:  { type: Number, required: false },
	fecha:        { type: Date, required: false },
	inialim:      { type: String,  required: false },
	finalim:      { type: String,  required: false },
	hrsnoalim:    { type: Number,  required: false },
	hrsdisponible:{ type: Number,  required: false },
	hrsefectivas: { type: Number,  required: false }
	
},{ collection: 'plan'});

//EventoSchema.plugin( uniqueValidator, { message: '{PATH} debe ser único'}) //afecta a los campos con unique: true. PATH toma el valor del campo correspondiente

module.exports = mongoose.model('Plan', PlanSchema);
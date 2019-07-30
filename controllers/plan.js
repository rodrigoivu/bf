'use strict'
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Plan = require('../models/plan');
var idItem;
//================================================
// CREAR UN ITEM
//================================================
// function registraItem(req,res){
// 	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
// 	var item = new Plan(req.body);
// 	//OJO CAMBIAR CONDICIONES SEGÚN MODELO
// 	item.save((err, itemStored) => {
// 		if(err){
// 			res.status(500).send({
// 				error: err,
// 				message: 'Puede que el Item ya exista'
// 			});
// 		}else{
// 			if(!itemStored){
// 				res.status(404).send({
// 					message: 'Imposible registrar item'
// 				});
// 			}else{
// 				res.status(200).send({
// 					item: itemStored,
// 				});
// 			}
// 		}
// 	});
// }
//================================================
// CREAR UN ITEM
//================================================
function registraItem(){
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Plan({
						especie:'salar',
						temperatura:12,
						fecha:'',
						inialim:'06:00',
						finalim:'21:00',
						hrsnoalim:4,
						hrsdisponible:14,
						hrsefectivas:10
					});
	//OJO CAMBIAR CONDICIONES SEGÚN MODELO
	item.save((err, itemStored) => {
		if(err){
			console.log("err: "+ err);
		}else{
			if(!itemStored){
				console.log("sin datos");
			}else{
				idItem=itemStored._id;
				console.log("idPlan: "+idItem);
			}
		}
	});
}
//================================================
// CREAR UN ITEM
//================================================
function crearItem(){
	Plan.findOne({}) 
	   .exec((err, itemsFound) => {
   			if (err){
   				console.log("err: "+ err);
   			}else{
   				if(!itemsFound){
						console.log("no hay datos");
						registraItem();
				}else{
					idItem=itemsFound._id;
					console.log("si hay datos de Plan id:"+idItem);
				}
   			}
   		});
}
//================================================
// ACTUALIZAR UN ITEM
//================================================
function actualizaItem(req,res){
	var itemId = req.params.id; 
	var params = req.body;      
 	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	Plan.findByIdAndUpdate(itemId, params, { new: true }, (err, itemUpdated) => { 
		if(err){
			res.status(500).send({
				error: err,
				message: 'Error al actualizar item'
			});
		}else{
			if(!itemUpdated){
				res.status(404).send({
					message: 'Imposible actualizar item',
			    });
			}else{
				res.status(200).send({
					item: itemUpdated,
				});
			}
		}
	});
}
//================================================
// ENCUENTRA EL ULTIMO
//================================================
function itemUltimo(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Plan.findOne({}) 
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				res.status(200).send({
						item: itemsFound
					});
	   			}
	   		});
}



module.exports = {
	registraItem,
	actualizaItem,
	itemUltimo,
	crearItem
};

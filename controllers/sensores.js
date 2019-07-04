'use strict'
//OJO CAMBIAR NOMBRE DE COLLECCION Y MODEL SEGÚN LA CONSULTA
var Sensores = require('../models/sensores');

//================================================
// CREAR UN ITEM
//================================================
function registraItem(req,res){
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	var item = new Sensores(req.body);
	//OJO CAMBIAR CONDICIONES SEGÚN MODELO
	item.save((err, itemStored) => {
		if(err){
			res.status(500).send({
				error: err,
				message: 'Puede que el Item ya exista'
			});
		}else{
			if(!itemStored){
				res.status(404).send({
					message: 'Imposible registrar item'
				});
			}else{
				res.status(200).send({
					item: itemStored,
				});
			}
		}
	});
}

//================================================
// MOSTRAR RANGO LOS ULTIMOS ITEMS 
//================================================
function itemsRangoUltimos(req,res){
	var items = req.query.items || 1000;
	var idsensor = req.query.idsensor; 
	items = Number(items);
	idsensor = Number(idsensor);
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Sensores.find({'sensor': idsensor})
	   .skip(0)
	   .limit(items)
	   .sort([['ts', -1]]) //no tiene indice es mas lento
	   //.sort({ _id: 'desc' }) //con esta es mas rápido pero solo si las fechas estan en orden
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				if(!itemsFound){
						res.status(404).send({message: 'Imposible mostrar información'});
					}else{	
		   				Sensores.countDocuments({}, (err,conteo) =>{
		   					res.status(200).send({
								items: itemsFound,
								total: conteo
							});
		   				});
		   			}
	   			}
	   		}
	   	);
}

//================================================
// MOSTRAR RANGO DE FECHAS
//================================================
function itemsRangoFechas(req,res){
	var desde = req.query.desde;
	var hasta = req.query.hasta;
	var idsensor = req.query.idsensor;
	idsensor = Number(idsensor);
	//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
	Sensores.find({'sensor': idsensor, ts : {
					    '$gte': (new Date(desde)).getTime(),
					    '$lte': (new Date(hasta)).getTime()
						}
					})
	   .sort([['ts', 1]])
	   //.maxTimeMS(300)
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando items'});
	   			}else{
	   				if(!itemsFound){
						res.status(404).send({message: 'Imposible mostrar información'});
					}else{
						//OJO CAMBIAR NOMBRE DE COLLECCION Y CAMPOS SEGÚN LA CONSULTA
		   				Sensores.countDocuments({}, (err,conteo) =>{
		   					res.status(200).send({
								items: itemsFound,
								total: conteo
							});
		   				});
		   			}
	   			}
	   		}
	   	);
}


//================================================
// ELIMINAR ITEM
//================================================
function deleteItem(req,res){
	var itemId = req.params.id; // éste parámetro se pone en el url despues de /
	//OJO CAMBIAR NOMBRE DE COLLECCION SEGÚN LA CONSULTA
	Sensores.findByIdAndRemove(itemId, (err, itemRemoved) => {
		if(err){
			res.status(500).send({message: 'Error al borrar registro'});
		}else{
			if(!itemRemoved){
				res.status(404).send({message: 'No existe registro con ese id'});
			}else{
				res.status(200).send({item: itemRemoved});
			}
		}
	});
}

module.exports = {
	registraItem,
	itemsRangoFechas,
	itemsRangoUltimos,
	deleteItem
};
var mqtt = require('mqtt')
var Jaula = require('../models/jaula');
var Linea = require('../models/linea');
var PublisherController  = require('./publisher');
//var Controllerbateriaharnero = require('../controllers/bateriaharnero');

var socketLocal; // se rescata del index.js
var ioLocal; // se rescata del index.js
//var client  = mqtt.connect('mqtt://192.168.0.2') // IP MAC
var client  = mqtt.connect('mqtt://18.224.109.40') //
client.on('connect', () => {
	client.subscribe('iofish/ciclo');
	client.subscribe('iofish/linea');
    client.subscribe('iofish/calibrar');
})
client.on('message', (topic, message) => {

    var items;
   	items = JSON.parse(message);

   	if(topic == 'iofish/ciclo'){
		saveJaulaData(items);
		
	}

	if(topic == 'iofish/linea'){
		//saveChancadordata(items);
		mensajeLinea(items)

	}

   	if(topic == 'iofish/calibrar'){
		//saveChancadordata(items);
		console.log(items);
	}


	if(topic == 'aplik/esfuerzo/chancadordata'){
		let tm=new Date(items.tm);
		items.tm = tm;
		saveChancadordata(items);
	}

	
	
})

//================================================
// SAVE JAULA DATA
//================================================
function saveJaulaData(item){
	
	if(item.BD == 1){
		//console.log('Guardo: '+item.JA);
		var jauladata = new Jaula;
		var jaulaSel;
		Linea.find({}) 
		   .exec(
		   		(err, itemsFound) => {
		   			if (err){
		   				console.log(err);
		   			}else{
		   				var lineaSel=itemsFound[item.LI-1];
		   				//console.log(lineaSel._id);
		   				Jaula.find({'linea': lineaSel._id})
		   					.exec(
						   		(err1, itemsFound1) => {
						   			if (err1){
						   				console.log(err1);
						   			}else{
						   				jaulaSel = itemsFound1[item.JA-1];

						   				Jaula.findByIdAndUpdate(jaulaSel._id, {'dado':item.DA}, { new: true }, (err2, itemUpdated) => { 
											if(err2){
												console.log(err2);
											}else{
												if(!itemUpdated){
													console.log('Imposible actualizar item');
													
												}else{
													//console.log(itemUpdated);
													PublisherController.setJaulaBD(item.LI,item.JA);

												}
											}
										});
						   			}
						   		}
						   	);
		   				
		   			}
		   		}
		   	);
	}
	
	mensajeCiclo(item)
}

//================================================
// SAVE ESFUERZO CHANCADOR
//================================================
function saveChancadordata(item){
    var chancadordata = new Chancadordata(item);
	Idchancador.findOne({}) 
	   .exec(
	   		(err, itemsFound) => {
	   			if (err){
	   				console.log(err);
	   			}else{
	   				let itemIdh = itemsFound;
	   				let sensores = [ parseInt(itemIdh.sensor_1),parseInt(itemIdh.sensor_2),
	   								 parseInt(itemIdh.sensor_3),parseInt(itemIdh.sensor_4),
	   								 parseInt(itemIdh.sensor_5),parseInt(itemIdh.sensor_6)];
			 		var idx = sensores.indexOf(item.idn);  
			 		if(idx > -1){
			 			chancadordata.idn=idx
			 			chancadordata.save((err, itemStored) => {
							if(err){
								return console.error(err);
							}else{
								if(!itemStored){
									//console.log('Imposible registrar item');
								}else{
									mensajeEsfuerzoChancadordata(chancadordata);
								}
							}
						});
			 		}
	   			}
	   	});
}


//================================================
// SAVE BATERIA CHANCADOR
//================================================
function saveBateriaChancador(item){
	Controllerbateriachancador.actualizaItem(item);
}



//================================================
// SAVE DATOS PILAS
//================================================
function saveEvapilas (item){
var evaporacionpilasdata = new Evaporacionpilasdata(item);
	evaporacionpilasdata.save((err, itemStored) => {
		if(err){
			return console.error(err);
		}else{
			if(!itemStored){
				//console.log('Imposible registrar item');
			}else{
				mensajeEvapilasdata(evaporacionpilasdata);
			}
		}
	});
}
//================================================
// INSERTAR ROTOPALAUNO VARIOS
//================================================
function insertaRotopalauno(items){

	Rotopalauno.collection.insertMany(items,(err, docs) => {
		if(err){
			return console.error(err);
		}else{
			console.log('Items insertados');
		}
	});

}

function asignarSocket(socket,io){
    socketLocal=socket;
    ioLocal=io;
}

function mensajeCalibrarOk(data){
	if(socketLocal){
		ioLocal.emit('CalibrarOk',{data: data});
	}
}

function mensajeCiclo(data){
	if(socketLocal){
		ioLocal.emit('ciclo',{data: data});
	}
}

function mensajeLinea(data){
	if(socketLocal){
		ioLocal.emit('linea',{data: data});
	}
}

module.exports = {
	asignarSocket
};

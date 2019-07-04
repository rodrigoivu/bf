var mqtt = require('mqtt')

//var Controllerbateriaharnero = require('../controllers/bateriaharnero');


var socketLocal; // se rescata del index.js
var ioLocal; // se rescata del index.js
//var client  = mqtt.connect('mqtt://192.168.0.5') // IP MAC
var client  = mqtt.connect('mqtt://18.224.109.40') //
client.on('connect', () => {
    client.subscribe('iofish/calibrar');
})
client.on('message', (topic, message) => {

    var items;
   	items = JSON.parse(message);
 	
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

module.exports = {
	asignarSocket
};

var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://192.168.0.7') //IP MAC
var client  = mqtt.connect('mqtt://18.224.109.40') //
var dataMqtt;
var dataSetJaula;
var ordenAlimentar;

client.on('connect', function () {
	enviarMqtt();
	setJaula();
	alimentar();
 });

function enviarMqtt(){
	client.publish('iofish/control', dataMqtt);
}

function setJaula(){
	client.publish('iofish/setjaula', dataSetJaula);
}
function alimentar(){
	client.publish('iofish/alimentar', ordenAlimentar);
}

function recibeOrden(socket){
	socket.on('recibeOrden', (data) => {
	    dataMqtt=data;	
        enviarMqtt();
    });
    socket.on('setJaula', (data) => {
	    dataSetJaula=data;	
        setJaula();
    });
    socket.on('ordenAlimentar', (data) => {
	    ordenAlimentar=data;	
        alimentar();
    });
}

module.exports = {
	recibeOrden,
	enviarMqtt,
	setJaula,
	alimentar
};
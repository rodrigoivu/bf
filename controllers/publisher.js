var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://192.168.0.5') //IP MAC
var client  = mqtt.connect('mqtt://18.224.109.40') //
var dataMqtt;

client.on('connect', function () {
	enviarMqtt();
 });

function enviarMqtt(){
	client.publish('iofish/control', dataMqtt);
}

function recibeOrden(socket){
	socket.on('recibeOrden', (data) => {
	    dataMqtt=data;	
        enviarMqtt();
    });
}

module.exports = {
	recibeOrden,
	enviarMqtt
};
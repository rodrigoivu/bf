'use strict'

var express = require('express');
var SensorController = require ('../controllers/sensor');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-sensor'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SensorController.registraItem  );
api.put    ('/actualiza-sensor/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SensorController.actualizaItem );
api.get    ('/sensor-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SensorController.itemsTodos    );
api.delete ('/borra-sensor/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SensorController.deleteItem    );
module.exports = api;
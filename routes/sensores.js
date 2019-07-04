'use strict'

var express = require('express');
var SensoresController = require ('../controllers/sensores');

var api     = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-sensores'     , [ md_auth.ensureAuth, md_auth.ensureAdminUser ], SensoresController.registraItem      );
api.get    ('/sensores-rango-fechas' , [ md_auth.ensureAuth, md_auth.ensureAdminUser ], SensoresController.itemsRangoFechas  );
api.get    ('/sensores-rango-ultimos', [ md_auth.ensureAuth, md_auth.ensureAdminUser ], SensoresController.itemsRangoUltimos );
api.delete ('/borra-sensores/:id'    , [ md_auth.ensureAuth, md_auth.ensureAdminUser ], SensoresController.deleteItem        );
module.exports = api;
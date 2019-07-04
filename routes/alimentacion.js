'use strict'

var express = require('express');
var AlimentacionController = require ('../controllers/alimentacion');

var api     = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-alimentacion'     , [ md_auth.ensureAuth, md_auth.ensureAdminUser ], AlimentacionController.registraItem      );
api.get    ('/alimentacion-rango-fechas' , [ md_auth.ensureAuth, md_auth.ensureAdminUser ], AlimentacionController.itemsRangoFechas  );
api.get    ('/alimentacion-rango-ultimos', [ md_auth.ensureAuth, md_auth.ensureAdminUser ], AlimentacionController.itemsRangoUltimos );
api.delete ('/borra-alimentacion/:id'    , [ md_auth.ensureAuth, md_auth.ensureAdminUser ], AlimentacionController.deleteItem        );
module.exports = api;
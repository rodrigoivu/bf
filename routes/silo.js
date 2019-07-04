'use strict'

var express = require('express');
var SiloController = require ('../controllers/silo');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-silo'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SiloController.registraItem  );
api.put    ('/actualiza-silo/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SiloController.actualizaItem );
api.get    ('/silo-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SiloController.itemsTodos    );
api.delete ('/borra-silo/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SiloController.deleteItem    );
module.exports = api;
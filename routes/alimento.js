'use strict'

var express = require('express');
var AlimentoController = require ('../controllers/alimento');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-alimento'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], AlimentoController.registraItem  );
api.put    ('/actualiza-alimento/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], AlimentoController.actualizaItem );
api.get    ('/alimento-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], AlimentoController.itemsTodos    );
api.delete ('/borra-alimento/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], AlimentoController.deleteItem    );
module.exports = api;
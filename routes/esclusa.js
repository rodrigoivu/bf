'use strict'

var express = require('express');
var EsclusaController = require ('../controllers/esclusa');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-esclusa'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], EsclusaController.registraItem  );
api.put    ('/actualiza-esclusa/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], EsclusaController.actualizaItem );
api.get    ('/esclusa-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], EsclusaController.itemsTodos    );
api.delete ('/borra-esclusa/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], EsclusaController.deleteItem    );
module.exports = api;
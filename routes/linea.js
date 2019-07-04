'use strict'

var express = require('express');
var LineaController = require ('../controllers/linea');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-linea'      ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], LineaController.registraItem       );
api.put    ('/actualiza-linea/:id' ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], LineaController.actualizaItem      );
api.get    ('/linea-todos'         ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], LineaController.itemsTodos         );
api.get    ('/linea-todos-completo',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], LineaController.itemsTodosCompleto );
api.delete ('/borra-linea/:id'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], LineaController.deleteItem         );
module.exports = api;
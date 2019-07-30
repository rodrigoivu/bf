'use strict'

var express = require('express');
var JaulaController = require ('../controllers/jaula');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-jaula'      ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], JaulaController.registraItem  );
api.put    ('/actualiza-jaula/:id' ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], JaulaController.actualizaItem );
api.get    ('/jaula-todos'         ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], JaulaController.itemsTodos    );
api.get    ('/jaula-todos-completo',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], JaulaController.itemsTodosCompleto );
api.delete ('/borra-jaula/:id'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], JaulaController.deleteItem    );
module.exports = api;
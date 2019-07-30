'use strict'

var express = require('express');
var ModelosfrController = require ('../controllers/modelosfr');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-modelosfr'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], ModelosfrController.registraItem  );
api.put    ('/actualiza-modelosfr/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], ModelosfrController.actualizaItem );
api.get    ('/modelosfr-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], ModelosfrController.itemsTodos    );
api.delete ('/borra-modelosfr/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], ModelosfrController.deleteItem    );
module.exports = api;
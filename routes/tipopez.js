'use strict'

var express = require('express');
var TipopezController = require ('../controllers/tipopez');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-tipopez'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], TipopezController.registraItem  );
api.put    ('/actualiza-tipopez/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], TipopezController.actualizaItem );
api.get    ('/tipopez-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], TipopezController.itemsTodos    );
api.delete ('/borra-tipopez/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], TipopezController.deleteItem    );
module.exports = api;
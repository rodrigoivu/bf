'use strict'

var express = require('express');
var SelectorController = require ('../controllers/selector');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-selector'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SelectorController.registraItem  );
api.put    ('/actualiza-selector/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SelectorController.actualizaItem );
api.get    ('/selector-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SelectorController.itemsTodos    );
api.delete ('/borra-selector/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], SelectorController.deleteItem    );
module.exports = api;
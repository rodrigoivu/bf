'use strict'

var express = require('express');
var BlowerController = require ('../controllers/blower');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-blower'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], BlowerController.registraItem  );
api.put    ('/actualiza-blower/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], BlowerController.actualizaItem );
api.get    ('/blower-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], BlowerController.itemsTodos    );
api.delete ('/borra-blower/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], BlowerController.deleteItem    );
module.exports = api;
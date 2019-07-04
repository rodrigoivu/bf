'use strict'

var express = require('express');
var DoserController = require ('../controllers/doser');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post   ('/registra-doser'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], DoserController.registraItem  );
api.put    ('/actualiza-doser/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], DoserController.actualizaItem );
api.get    ('/doser-todos'        ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], DoserController.itemsTodos    );
api.delete ('/borra-doser/:id'    ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], DoserController.deleteItem    );
module.exports = api;
'use strict'

var express = require('express');
var PlanController = require ('../controllers/plan');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/registra-plan'     ,[ md_auth.ensureAuth, md_auth.ensureAdminUser ], PlanController.registraItem  );
api.put ('/actualiza-plan/:id',[ md_auth.ensureAuth, md_auth.ensureAdminUser ], PlanController.actualizaItem );
api.get ('/plan-ultimo',       [ md_auth.ensureAuth, md_auth.ensureAdminUser ], PlanController.itemUltimo);
module.exports = api;
var express = require('express');
var ctF = require('../controllers/ctFiscalia');

var router = express.Router();

/* GET listing. */
router.get('/fiscalias',ctF.findAllFiscalias);
router.get('/fiscalia/:id',ctF.findFiscalia);
router.post('/nueva',ctF.addFiscalia);
router.delete('/eliminar/:id',ctF.deleteFiscalia);
router.put('/actualizar',ctF.updateFiscalia);

module.exports = router;


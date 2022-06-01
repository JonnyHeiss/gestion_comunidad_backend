/*
Rutas de consultas
host+ /api/consulta
*/
const { Router }=require('express');
const router=Router();
const { check } = require('express-validator'); 

const {leetransentrefechasCtrl, leeingygastosxannoCtrl} = require('../controllers/consultasCtrl');

router.post('/transentrefechas',[], leetransentrefechasCtrl);
router.post('/ingygastosxanno',[], leeingygastosxannoCtrl);
// router.post('/annos',[], leetablaañosCtrl);
// router.post('/registrarmovimiento',[], registrarmovimientoCtrl);
module.exports= router;
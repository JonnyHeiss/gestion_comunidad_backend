/*
Rutas de movimientos
host+ /api/movimiento
*/
const { Router }=require('express');
const router=Router();
const { check } = require('express-validator'); 
const {registrarmovimientoCtrl, leetablamovimientoCtrl,  leetablafamiliaCtrl,
   leetablaañosCtrl} = require('../controllers/movCtrl');
//FamiliasTodas
//AñosExistentes

router.get('/',(req,res) =>{
  console.log('Se solicitó el ');
  res.json({
      ok: true
  })
});
router.post('/clasemovimientos',[], leetablamovimientoCtrl);
router.post('/familias',[], leetablafamiliaCtrl);
router.post('/annos',[], leetablaañosCtrl);
router.post('/registrarmovimiento',[], registrarmovimientoCtrl);
module.exports= router;
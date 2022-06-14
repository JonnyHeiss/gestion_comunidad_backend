/*
Rutas de movimientos
host+ /api/movimiento
*/
const { Router }=require('express');
const router=Router();
const { check } = require('express-validator'); 
const {registrarmovimientoCtrl, leetablamovimientoCtrl,  leetablafamiliaCtrl, leeUsuarioByEmailCtrl,
   leetablaañosCtrl, leeOrganizacionCtrl, leeUsuarioCtrl, leeDocumentoCtrl, leeIngresosCasaEntreFechasCtrl
  } = require('../controllers/movCtrl');
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
router.post('/leeOrganizacion',[], leeOrganizacionCtrl);
router.post('/leeusuario',[], leeUsuarioCtrl);
router.post('/leedocumento',[], leeDocumentoCtrl);
router.post('/leeingresoscasaentrefechas',[], leeIngresosCasaEntreFechasCtrl);
router.post('/leeusuariobyemail',[], leeUsuarioByEmailCtrl);

module.exports= router;
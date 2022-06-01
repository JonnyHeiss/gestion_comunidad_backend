const { response } = require('express'); //para tener la intellisense
const { registrarmovimiento } =require('../helpers/registrarMovimiento');
const { leetablamovimiento } =require('../helpers/leetablamovimiento');
const { leetablafamilia } =require('../helpers/leetablafamilia');
const { leetablaaños } =require('../helpers/leetablaaños');
const registrarmovimientoCtrl = async  (req, res = response ) =>{
    const {tipoDocumento, fechaDocumento, idCasa, monto,
            idUsuario,idClaseMovimiento,comentario}=req.body;
            console.log("🚀 ~ file: movCtrl.js ~ line 8 ~ registrarmovimientoCtrl ~ ipoDocumento, fechaDocumento, idCasa, monto", tipoDocumento, fechaDocumento, idCasa, monto)
      try {
          data  = await  registrarmovimiento(tipoDocumento, fechaDocumento, idCasa, monto,idUsuario,idClaseMovimiento,comentario);
            res.json ({
                ok: true,
                data
            })
      }catch (error) {
          res.status(500).json ({
              ok:false,
              msg:'Favor hablar con el administrador'
          })
      }
};

const leetablamovimientoCtrl = async (req, res = response ) => {
    const {idUsuario} = req.body; 
    console.log('leetablaCtrl',idUsuario);
    try {
        data  = await  leetablamovimiento(idUsuario);

        res.json ({
            ok: true,
            data
         })
    }catch (error) {
        res.status(500).json ({
            ok:false,
            msg:'Favor hablar con el administrador'
        })
    }
};

const leetablafamiliaCtrl = async (req, res = response ) => {
    const {idUsuario} = req.body; 
    console.log('leetablafamiliaCtrl',idUsuario );
    try {
        data  = await  leetablafamilia(idUsuario);
        res.json ({
            ok: true,
            data
         })
    }catch (error) {
        res.status(500).json ({
            ok:false,
            msg:'Favor hablar con el administrador'
        })
    }
};

const leetablaañosCtrl = async (req, res = response ) => {
    const {idUsuario} = req.body; 
    console.log('leetablaAñosCtrl',idUsuario);
    try {
        data  = await  leetablaaños(idUsuario);

        res.json ({
            ok: true,
            data
         })
    }catch (error) {
        res.status(500).json ({
            ok:false,
            msg:'Favor hablar con el administrador'
        })
    }
};
 module.exports ={
    registrarmovimientoCtrl,
    leetablamovimientoCtrl,
    leetablafamiliaCtrl,
    leetablaañosCtrl,
 }



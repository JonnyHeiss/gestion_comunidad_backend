const { response } = require('express'); //para tener la intellisense
const { registrarmovimiento } = require('../helpers/registrarMovimiento');
const { leetablamovimiento } = require('../helpers/leetablamovimiento');
const { leetablafamilia } = require('../helpers/leetablafamilia');
const { leetablaaños } = require('../helpers/leetablaaños');
const { leeorganizacion } = require('../helpers/leeOrganizacion');
const { leeusuario } = require('../helpers/leeusuario');
const { leeDocumento } = require('../helpers/leeDocumento');
const { leeIngresosCasaEntreFechas } = require('../helpers/leeIngresosCasaEntreFechas');
const { leeUsuarioByEmail } = require('../helpers/leeUsuarioByEmail');


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
const leeOrganizacionCtrl = async (req, res = response ) => {
    const { idUsuario } = req.body; 
    console.log('leeOrganizacionCtrl', idUsuario );
    try {
        data  = await  leeorganizacion(idUsuario);
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
const leeUsuarioCtrl = async (req, res = response ) => {
    const { idUsuario } = req.body; 
    console.log('leeUsuarioCtrl', idUsuario );
    try {
        data  = await  leeusuario(idUsuario);
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
const leeDocumentoCtrl = async (req, res = response ) => {
    const { tipoDocumento, nroDocumento, idUsuario } = req.body; 
    console.log('leeDocumentoCtrl',  tipoDocumento, nroDocumento, idUsuario );
    try {
        data  = await  leeDocumento( tipoDocumento, nroDocumento, idUsuario );
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
const leeIngresosCasaEntreFechasCtrl = async (req, res = response ) => {
    const {  idCasa, idUsuario,  fechaInicio, fechaFin } = req.body; 
    console.log('leeIngresosCasaEntreFechasCtrl',   idCasa, idUsuario,  fechaInicio, fechaFin );
    try {
        data  = await  leeIngresosCasaEntreFechas(  idCasa, idUsuario,  fechaInicio, fechaFin );
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
const leeUsuarioByEmailCtrl = async (req, res = response ) => {
    const { email, password } = req.body; 
    console.log('leeUsuarioByEmailCtrl'  );
    try {
        data  = await  leeUsuarioByEmail( email );
        //console.log('leeUsuarioByEmailCtrl-data',data , password);
        if ( data.recordset.length === 0 ){ //no encontrado
            res.json ({
                ok: false,  
                data             
             }) 
        }else {
            if ( password !=='googleencode' && ( data.recordset[0].Clave !== password ) ){
                data  = await  leeUsuarioByEmail( '...' );//se lee uno no existente
                res.json ({
                    ok: true,
                    data
                 })
            }else{
                
                res.json ({
                    ok: true,
                    data
                 })
            }

        }

        
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
    leeOrganizacionCtrl,
    leeUsuarioCtrl,
    leeDocumentoCtrl,
    leeIngresosCasaEntreFechasCtrl,
    leeUsuarioByEmailCtrl,
 }



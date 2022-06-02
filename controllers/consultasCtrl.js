const { response } = require('express'); //para tener la intellisense
const { leetransentrefechas } =require('../helpers/leetransentrefechas');
const { leeingygastosxanno } =require('../helpers/leeingygastosxaño');
const leetransentrefechasCtrl = async (req, res = response ) => {
    const {idUsuario, fechaInicio, fechaFin, tipoFondo} = req.body; 
    
    console.log('leetransentrefechasCtrl',idUsuario,fechaInicio, fechaFin, tipoFondo);
    try {
        data  = await  leetransentrefechas(idUsuario, fechaInicio, fechaFin, tipoFondo);

        res.json ({
            ok: true,
            data
         })
    }catch (error) {
        res.status(500).json ({
            ok:false,
            msg:'Favor hablar con el administrador'
        })
    }};

const leeingygastosxannoCtrl = async (req, res = response ) => {
    const {idUsuario, ingresoGasto , claseMovimientos, año} = req.body; 
    
    console.log('leeingygastosxannoCtrl',idUsuario, ingresoGasto , claseMovimientos, año);
    try {
        data  = await  leeingygastosxanno(idUsuario, ingresoGasto , claseMovimientos, año);

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
    leetransentrefechasCtrl, 
    leeingygastosxannoCtrl

 }
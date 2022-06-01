
const sql = require('mssql'); 
const dbconfig = require('../database/dbconfig');

const registrarmovimiento= async (tipoDocumento, fechaDocumento, idCasa, monto,
    idUsuario,idClaseMovimiento,comentario) =>{
       console.log('sp-registrarmovimiento',tipoDocumento, fechaDocumento, idCasa, monto,
       idUsuario,idClaseMovimiento,comentario) ;
    const procedureName='RegistraMovimiento';
    try{
      return await sql.connect( dbconfig)  
      .then (pool =>{
          return pool.request()
          .input('TipoDocumento', sql.VarChar,tipoDocumento)
          .input('FechaDocumento', sql.VarChar,fechaDocumento)
          .input('idCasa', sql.Int,idCasa)
          .input('Monto', sql.Int,monto)
          .input('idUsuario', sql.Int,idUsuario)
          .input('idClaseMovimiento', sql.Int,idClaseMovimiento)
          .input('Comentario', sql.VarChar,comentario)
          .execute( procedureName );
      }).catch (err =>{
        console.log(err);  
      }) 
    }catch (err){
        console.log(err);
        throw new Error('Error al conectar DB');
    }
};
module.exports ={
    registrarmovimiento,   
}
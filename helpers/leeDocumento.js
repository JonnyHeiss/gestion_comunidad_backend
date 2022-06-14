const sql = require('mssql'); 
const dbconfig = require('../database/dbconfig');

const leeDocumento = async ( tipoDocumento, nroDocumento, idUsuario ) =>{
       console.log('leeDocumento-SP') ;
    const procedureName='LeeDocumento';
    try{
      return await sql.connect( dbconfig)  
      .then (pool =>{
          return pool.request()
          .input('TipoDocumento', sql.VarChar,tipoDocumento )
          .input('NroDocumento', sql.Int,nroDocumento )
          .input('idUsuario', sql.Int,idUsuario )
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
    leeDocumento,   
}
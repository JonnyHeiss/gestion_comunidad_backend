const sql = require('mssql'); 
const dbconfig = require('../database/dbconfig');

const leeIngresosCasaEntreFechas = async ( idCasa, idUsuario,  fechaInicio, fechaFin ) =>{
       console.log('leeIngresosCasaEntreFechas-SP') ;
    const procedureName='LeeIngresosCasaEntreFechas';
    try{
      return await sql.connect( dbconfig)  
      .then (pool =>{
          return pool.request()
          .input('idCasa', sql.Int,idCasa )
          .input('idUsuario', sql.Int,idUsuario )
          .input('FechaInicio', sql.DateTime, fechaInicio )
          .input('FechaFin', sql.DateTime, fechaFin )
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
    leeIngresosCasaEntreFechas,   
}
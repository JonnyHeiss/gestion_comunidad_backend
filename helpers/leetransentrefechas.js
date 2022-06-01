const sql = require('mssql'); 
const dbconfig = require('../database/dbconfig');

const leetransentrefechas = async (idUsuario, fechaInicio, fechaFin, tipoFondo) =>{
    const queryString="select * from CartolaMovEntreFechas("+ idUsuario.toString()+ ",'"+fechaInicio 
    + "','" + fechaFin + "','"+ tipoFondo +"')";
    console.log('leetransentrefechas-tabla' , queryString) ;
    try{
      return await sql.connect( dbconfig)  
      .then (pool =>{
          return pool.request()
          //.input('idUsuario', sql.Int,idUsuario)
          .query ( queryString );
      }).catch (err =>{
        console.log(err);  
      }) 
    }catch (err){
        console.log(err);
        throw new Error('Error al conectar DB');
    }
};
module.exports ={
    leetransentrefechas,   
}
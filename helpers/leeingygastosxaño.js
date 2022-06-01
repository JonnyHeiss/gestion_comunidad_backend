const sql = require('mssql'); 
const dbconfig = require('../database/dbconfig');

const leeingygastosxanno = async (idUsuario, ingresoGasto , claseMovimientos, año) =>{
    const queryString="select * from ingresosgastosxaño("+ idUsuario.toString()+ ",'"+ingresoGasto 
    + "','" + claseMovimientos + "','"+ año.toString() +"')";
    console.log('leeingygastosxaño-tabla' , queryString) ;
    try{
      return await sql.connect( dbconfig)  
      .then (pool =>{
          return pool.request()
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
    leeingygastosxanno,   
}
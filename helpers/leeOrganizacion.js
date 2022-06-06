const sql = require('mssql'); 
const dbconfig = require('../database/dbconfig');

const leeorganizacion = async (idUsuario) =>{
       console.log('leeorganizacion-SP') ;
    const procedureName='LeeOrganizacion';
    try{
      return await sql.connect( dbconfig)  
      .then (pool =>{
          return pool.request()
          .input('idUsuario', sql.Int,idUsuario)
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
    leeorganizacion,   
}
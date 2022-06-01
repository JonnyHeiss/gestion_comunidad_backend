const sql = require('mssql'); 
const dbconfig = require('../database/dbconfig');

const leetablafamilia = async (idUsuario) =>{
       console.log('leetablafamilia-SP') ;
    const procedureName='FamiliasTodas';
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
    leetablafamilia,   
}
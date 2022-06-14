const sql = require('mssql'); 
const dbconfig = require('../database/dbconfig');

const leeUsuarioByEmail = async ( email ) =>{
       console.log('leeUsuarioByEmail-SP') ;
    const procedureName='leeUsuarioByEmail';
    try{
      return await sql.connect( dbconfig)  
      .then (pool =>{
          return pool.request()
          .input('Email', sql.VarChar, email )
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
    leeUsuarioByEmail,   
}
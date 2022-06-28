

    const dbconfig = { 
        user: 'sa', 
        password: 'YZ83sn59', //'Cibeles$$2022@',//'as',  
        server: 'cibeles.ticenter.cl',//200.73.59.58',//'localhost', //'209.126.8.246', // 'vmi582191.contaboserver.net'        
        database: 'GastosComunes',  
        // synchronize: true,
        options: { 
            "trustServerCertificate": true,
             "requestTimeout": 230000  ,

        },

    }; 
module.exports =dbconfig;
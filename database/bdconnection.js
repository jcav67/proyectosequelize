const { Sequelize } = require('sequelize');


const dbconnect = new Sequelize('NombreBasedeDatos','USUARIO', 'CONTRASEÑA', {
    host: 'localhost',
    dialect: 'mysql',

  });

module.exports=dbconnect;
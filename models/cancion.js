const { DataTypes } = require('sequelize');
const dbconnect = require('../database/bdconnection');

const Song=dbconnect.define('Song',{
    artista:{
        type: DataTypes.STRING,
        allowNull:false

    },
    nombre_cancion:{
        type: DataTypes.STRING,
        allowNull:false
    },
    duracion:{
        type: DataTypes.STRING,
        allowNull:false
    },
    album:{
        type: DataTypes.STRING,
        allowNull:false
    },
});

module.exports= Song
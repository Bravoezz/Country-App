const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('activities',{
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duracion:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        temporada:{
            type: DataTypes.STRING,
            allowNull: false,
        }    
    },{timestamps:false});
}
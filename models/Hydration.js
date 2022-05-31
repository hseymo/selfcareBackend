const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hydration extends Model {}

Hydration.init({
    date: {
        type: DataTypes.DATEONLY,
        allowNull:false,
    }, 
    water_oz: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }, 
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hydration'
});

module.exports=Hydration
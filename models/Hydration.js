const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hydration extends Model {}

Hydration.init({
    date: {
        type: DataTypes.DATEONLY,
        allowNull:false
    }, 
    // cumulative oz throughout the day
    water_oz: {
        type: DataTypes.FLOAT,
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
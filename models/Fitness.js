const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fitness extends Model {}

Fitness.init({
    date: {
        type: DataTypes.DATEONLY,
        allowNull:false,
    }, 
    activity_type: {
        type: DataTypes.CHAR,
        // allowNull:false,
    }, 
    activity_duration: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    }, 
    RPE: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    },
    notes: {
        type: DataTypes.TEXT,
        // allowNull:false,
    },

},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'fitness'
});

module.exports=Fitness
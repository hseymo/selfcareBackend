const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fitness extends Model {}

Fitness.init({
    date: {
        type: DataTypes.DATEONLY,
        allowNull:false,
        unique:true,
    }, 
    activity_type: {
        type: DataTypes.CHAR,
        allowNull:false,
    }, 
    // duration in minutes
    activity_duration: {
        type: DataTypes.INTEGER,
    }, 
    RPE: {
        type: DataTypes.INTEGER,
    },
    notes: {
        type: DataTypes.TEXT,
    },

},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'fitness'
});

module.exports=Fitness
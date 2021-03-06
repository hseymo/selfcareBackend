const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sleep extends Model {}

Sleep.init({
    date: {
        type: DataTypes.DATEONLY,
        allowNull:false
    }, 
    // hours slept at night
    time_asleep: {
        type: DataTypes.FLOAT,
        allowNull:false,
    }, 
    diff_falling_asleep: {
        type: DataTypes.STRING,
    }, 
    diff_staying_asleep: {
        type: DataTypes.STRING,
    }, 
    mood_upon_wake: {
        type: DataTypes.STRING,
    }, 
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sleep'
});

module.exports=Sleep
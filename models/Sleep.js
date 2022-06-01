const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sleep extends Model {}

Sleep.init({
    date: {
        type: DataTypes.DATEONLY,
        allowNull:false,
    }, 
    // hours slept at night
    time_asleep: {
        type: DataTypes.INTEGER,
    }, 
    diff_falling_asleep: {
        type: DataTypes.BOOLEAN,
    }, 
    diff_staying_asleep: {
        type: DataTypes.BOOLEAN,
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
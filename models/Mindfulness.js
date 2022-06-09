const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mindfulness extends Model {}

Mindfulness.init({
    date: {
        type: DataTypes.DATEONLY,
        allowNull:false
    }, 
    // make another model and do a one to many relationship??
    activities_completed: {
        type: DataTypes.STRING,
    }, 
    overall_mood: {
        type: DataTypes.STRING,
    }, 
    quote_of_the_day: {
        type: DataTypes.STRING,
    }, 
    journal: {
        type: DataTypes.TEXT,
    }, 
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'mindfulness'
});

module.exports=Mindfulness
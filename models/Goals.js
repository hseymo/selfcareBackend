const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goals extends Model {}

Goals.init({
    fitness_time: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    }, 
    fitness_frequency: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    }, 
    sleep_time: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    },
    hydration_oz: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    },

},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goals'
});

module.exports=Goals
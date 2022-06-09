const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goals extends Model {}

Goals.init({
    // minutes per week fitness goal
    fitness_time: {
        type: DataTypes.INTEGER,
    }, 
    // days per week fitness goal
    fitness_frequency: {
        type: DataTypes.INTEGER,
    }, 
    // hours per night fitness goal
    sleep_time: {
        type: DataTypes.FLOAT,
    },
    // oz per day hydration goal
    hydration_oz: {
        type: DataTypes.FLOAT,
    },
    // days per week mindfulness goal
    mindfulness_frequency: {
        type: DataTypes.INTEGER,
    },

},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goals'
});

module.exports=Goals
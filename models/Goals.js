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
    // oz per day hydeation goal
    hydration_oz: {
        type: DataTypes.FLOAT,
    },

},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goals'
});

module.exports=Goals
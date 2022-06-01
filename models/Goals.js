const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goals extends Model {}

Goals.init({
    // minutes per week fitness goal
    fitness_time: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    }, 
    // days per week fitness goal
    fitness_frequency: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    }, 
    // hours per night fitness goal
    sleep_time: {
        type: DataTypes.INTEGER,
        // allowNull:false,
    },
    // oz per day hydeation goal
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
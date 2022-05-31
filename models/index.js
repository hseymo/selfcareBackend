const User = require("./User")
const Goals = require("./Goals")
const Fitness = require("./Fitness")
const Hydration = require("./Hydration")
const Sleep = require("./Sleep.js")
const Mindfulness = require("./Mindfulness")

User.hasOne(Goals);
Goals.belongTo(User);

User.hasMany(Fitness);
Fitness.belongsTo(User);

User.hasMany(Hydration);
Hydration.belongsTo(User);

User.hasMany(Sleep);
Sleep.belongsTo(User);

User.hasMany(Mindfulness);
Mindfulness.belongsTo(User);

module.exports = {
    User,
    Goals,
    Fitness,
    Hydration,
    Sleep,
    Mindfulness
};
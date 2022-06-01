// import modules and packages
const sequelize = require("../config/connection");
const { User, Goals, Fitness, Hydration, Sleep, Mindfulness } = require("../models");

// fitness
const fitness = [
    {
        date: 2022-05-1,
        Activity_type: 'Ran a mile',
        activity_duration: 10,
        RPE: 8,
        notes: 'This killed me!'
    },
    {
        date: 2022-03-13,
        Activity_type: 'Walked a trail',
        activity_duration: 120,
        RPE: 3,
        notes: 'Redmond has some nice trails.'
    },
    {
        date: 2022-04-17,
        Activity_type: 'Calisthenics',
        activity_duration: 30,
        RPE: 7,
        notes: '50 pushups, 100 situps, 75 squats!'
    }
];

// goals
const goals = [
    {
        id: 1,
        fitness_time: 240,
        fitness_frequency: 5,
        sleep_time: 8,
        hydration_oz: 150
    },
    {
        id: 2,
        fitness_time: 300,
        fitness_frequency: 3,
        sleep_time: 7,
        hydration_oz: 125
    },
    {
        id: 3,
        fitness_time: 180,
        fitness_frequency: 6,
        sleep_time: 6.5,
        hydration_oz: 175
    },
    {
        id: 4,
        fitness_time: 250,
        fitness_frequency: 7,
        sleep_time: 8.5,
        hydration_oz: 100
    }
];

// hydration
const hydration = [
    {
        date: 2022-03-13,
        water_oz: 79
    },
    {
        date: 2022-05-21,
        water_oz: 123
    },
    {
        date: 2022-04-1,
        water_oz: 117
    }
];

// mindfulness
const mindfulness = [
    {
        date: 2022-01-14,
        activities_completed: 'upper body routine',
        overall_mood: 'motivated',
        quote_of_the_day: 'A healthy mind starts with a healthy body.',
        journal: 'This is the journal where users can place notes and jot things about their workout.'
    }
]

//sleep
const sleep = [
    {
        date: 2022-01-14,
        time_asleep: 8,
        diff_falling_asleep: true,
        diff_staying_asleep: false,
        mood_upon_wake: 'groggy'
    },
    {
        date: 2022-05-8,
        time_asleep: 6.5,
        diff_falling_asleep: false,
        diff_staying_asleep: false,
        mood_upon_wake: 'well rested'
    }
]

// users
const users = [
    {
        username: "bobross",
        password: "password"
    },
    {
        username: "user",
        password: "password"
    }
];

// bulk create
const seed = async () => {

    try {
        await sequelize.sync({ force: true });

        await Fitness.bulkCreate(fitness);
        await Goals.bulkCreate(goals);
        await Hydration.bulkCreate(hydration);
        await Mindfulness.bulkCreate(mindfulness);
        await Sleep.bulkCreate(sleep);
        await User.bulkCreate(users, { individualHooks: true });

        process.exit(0);
    } catch(err){
        console.log(err);
    };
};

seed();
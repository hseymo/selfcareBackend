// import modules and packages
const sequelize = require("../config/connection");
const { User, Goals, Fitness, Hydration, Sleep, Mindfulness } = require("../models");

// fitness
const fitness = [
    {
        date: '2022-06-07',
        activity_type: 'Ran a half marathon',
        activity_duration: 120,
        RPE: 8,
        notes: 'My second half marathon!',
        userId: 1
    },
    {
        date: '2022-06-06',
        activity_type: 'Yoga',
        activity_duration: 60,
        RPE: 4,
        notes: 'Power yoga focused on hip openers!',
        userId: 1
    },
    {
        date: '2022-06-02',
        activity_type: 'Ran a mile',
        activity_duration: 10,
        RPE: 8,
        notes: 'This killed me!',
        userId: 1
    },
    {
        date: '05/31/2022',
        activity_type: 'Walked a trail',
        activity_duration: 120,
        RPE: 3,
        notes: 'Redmond has some nice trails.',
        userId: 1
    },
    {
        date: '05-29-2022',
        activity_type: 'Calisthenics',
        activity_duration: 30,
        RPE: 7,
        notes: '50 pushups, 100 situps, 75 squats!',
        userId: 1
    },
    {
        date: '2022-05-28',
        activity_type: 'Spin class',
        activity_duration: 45,
        RPE: 8,
        notes: 'Intervals of HIIT with climbs.',
        userId: 1
    },
    {
        date: '05/26/2022',
        activity_type: 'Ran 7 miles',
        activity_duration: 60,
        RPE: 8,
        notes: 'Good endurance run on a flat route.',
        userId: 1
    },
    {
        date: '05/25/2022',
        activity_type: 'Barre class',
        activity_duration: 50,
        RPE: 5,
        notes: 'Focused on core and glutes.',
        userId: 1
    },
    {
        date: '05/24/2022',
        activity_type: 'Bodyweight strength training',
        activity_duration: 45,
        RPE: 8,
        notes: 'Pyramid working totalling 100 reps of each exercise x 8 exercises.',
        userId: 1
    },
];

// goals
const goals = [
    {
        fitness_time: 240,
        fitness_frequency: 5,
        sleep_time: 8,
        hydration_oz: 150,
        userId: 1
    },
    {
        fitness_time: 300,
        fitness_frequency: 3,
        sleep_time: 7,
        hydration_oz: 125,
        userId: 2
    },
    {
        fitness_time: 180,
        fitness_frequency: 6,
        sleep_time: 6.5,
        hydration_oz: 175
    },
    {
        fitness_time: 250,
        fitness_frequency: 7,
        sleep_time: 8.5,
        hydration_oz: 100
    }
];

// hydration
const hydration = [
    {
        date: '06/07/2022',
        water_oz: 66,
        userId: 1
    },
    {
        date: '06/06/2022',
        water_oz: 80,
        userId: 1
    },
    {
        date: '06/01/2022',
        water_oz: 79,
        userId: 1
    },
    {
        date: '05/29/2022',
        water_oz: 123,
        userId: 1
    },
    {
        date: '05/28/2022',
        water_oz: 117,
        userId: 1
    },
    {
        date: '05/27/2022',
        water_oz: 65,
        userId: 1
    },
    {
        date: '05/26/2022',
        water_oz: 64,
        userId: 1
    },
    {
        date: '05/25/2022',
        water_oz: 72,
        userId: 1
    }
];

// mindfulness
const mindfulness = [
    {
        date: '05/28/2022',
        activities_completed: 'upper body routine',
        overall_mood: 'motivated',
        quote_of_the_day: 'A healthy mind starts with a healthy body.',
        journal: 'This is the journal where users can place notes and jot things about their workout.',
        userId: 1
    }
]

//sleep
const sleep = [
    {
        date: '06/6/2022',
        time_asleep: 10,
        diff_falling_asleep: false,
        diff_staying_asleep: false,
        mood_upon_wake: 'tired',
        userId: 1
    },
    {
        date: '06/7/2022',
        time_asleep: 6,
        diff_falling_asleep: false,
        diff_staying_asleep: false,
        mood_upon_wake: 'groggy',
        userId: 1
    },
    {
        date: '06/1/2022',
        time_asleep: 9,
        diff_falling_asleep: false,
        diff_staying_asleep: false,
        mood_upon_wake: 'overslept',
        userId: 1
    },
    {
        date: '05/31/2022',
        time_asleep: 9,
        diff_falling_asleep: false,
        diff_staying_asleep: false,
        mood_upon_wake: 'rested',
        userId: 1
    },
    {
        date: '05/30/2022',
        time_asleep: 6,
        diff_falling_asleep: false,
        diff_staying_asleep: false,
        mood_upon_wake: 'tired',
        userId: 1
    },
    {
        date: '05/29/2022',
        time_asleep: 8,
        diff_falling_asleep: true,
        diff_staying_asleep: false,
        mood_upon_wake: 'fine',
        userId: 1
    },
    {
        date: '05/28/2022',
        time_asleep: 8,
        diff_falling_asleep: true,
        diff_staying_asleep: false,
        mood_upon_wake: 'groggy',
        userId: 1
    },
    {
        date: '05/27/2022',
        time_asleep: 6.5,
        diff_falling_asleep: false,
        diff_staying_asleep: false,
        mood_upon_wake: 'well rested',
        userId: 1
    }
]

// users
const users = [
    {
        first_name: 'bob',
        last_name: 'ross',
        email: 'bob@bob.com',
        password: "password"
    },
    {
        first_name: 'user',
        last_name: 'user',
        email: 'user@user.com',
        password: "password"
    }
];

// bulk create
const seed = async () => {

    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(users, { individualHooks: true });
        await Fitness.bulkCreate(fitness);
        await Goals.bulkCreate(goals);
        await Hydration.bulkCreate(hydration);
        await Mindfulness.bulkCreate(mindfulness);
        await Sleep.bulkCreate(sleep);

        process.exit(0);
    } catch(err){
        console.log(err);
    };
};

seed();
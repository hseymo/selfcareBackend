const express = require('express');
const router = express.Router();
const {User, Goals} = require("../../models");
const { withAuth } = require("../../utils/auth")

//find all goals with associated users
router.get("/", (req, res) => {
    Goals.findAll()
      .then(dbGoals => {
        res.json(dbGoals);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //find one goal and associated user
  router.get("/:id", (req, res) => {
    Goals.findByPk(req.params.id)
      .then(dbGoal => {
        if(!dbGoal) {
          return res.status(404).json({msg:'not found'})
        }
        res.json(dbGoal);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

//find all goals with associated users
router.get("/user/me", withAuth, (req, res) => {
  Goals.findAll({ 
    where: {
      userId: req.user
    }
  })
    .then(dbGoals => {
      res.json(dbGoals);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
  
  //create goal 
  router.post("/", withAuth, (req, res) => {
    console.log(req.user)
  Goals.create({
      userId:req.user,
      fitness_time:req.body.fitness_time,
      fitness_frequency:req.body.fitness_frequency,
      sleep_time: req.body.sleep_time,
      hydration_oz: req.body.hydration_oz,
      mindfulness_time: req.body.mindfulness_time
    })
      .then(newGoal => {
        res.json(newGoal);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //update goal
  router.put("/user/me", withAuth, (req, res) => {
    Goals.update(req.body, {
      where: {
        id: req.body.id,
        // userId: req.user
      }
    }).then(updatedGoal => {
      if(!updatedGoal[0]) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(updatedGoal);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete goal
  router.delete("/:id", withAuth, (req, res) => {
    Goals.destroy({
      where: {
        id: req.params.id,
        userId:req.user
      }
    }).then(delGoal => {
      if(!delGoal) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(delGoal);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
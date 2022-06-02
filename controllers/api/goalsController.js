const express = require('express');
const router = express.Router();
const {User, Goals} = require("../../models");

//find all goals with associated users
router.get("/", (req, res) => {
    Goals.findAll({ 
      include: [User]
    })
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
    Goals.findByPk(req.params.id,
      {include: [User]
    })
      .then(dbGoal => {
        res.json(dbGoal);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //create goal 
  router.post("/", (req, res) => {
  Goals.create({
    userId:req.body.userId,
      fitness_time:req.body.fitness_time,
      fitness_frequency:req.body.fitness_frequency,
      sleep_time: req.body.sleep_time,
      hydration_oz: req.body.hydration_oz
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
  router.put("/:id", (req, res) => {
    Goals.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedGoal => {
      res.json(updatedGoal);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete goal
  router.delete("/:id", (req, res) => {
    Goals.destroy({
      where: {
        id: req.params.id
      }
    }).then(delGoal => {
      res.json(delGoal);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
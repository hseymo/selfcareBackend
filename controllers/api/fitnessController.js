const express = require('express');
const router = express.Router();
const {User, Fitness} = require("../../models");

//find all fitness data entries with associated users
router.get("/", (req, res) => {
    Fitness.findAll({ 
      include: [User]
    })
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //find one fitness data entry and associated user
  router.get("/:id", (req, res) => {
    Fitness.findByPk(req.params.id,
      {include: [User]
    })
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //create fitness data entry 
  router.post("/", (req, res) => {
    Fitness.create({
      userId:req.body.userId,
      date:req.body.date,
      activity_type:req.body.activity_type,
      activity_duration:req.body.activity_duration,
      RPE: req.body.RPE,
      notes: req.body.notes,
    })
      .then(newFitness => {
        res.json(newFitness);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //update fitness data entry
  router.put("/:id", (req, res) => {
    Fitness.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedFitness => {
      res.json(updatedFitness);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete fitness data entry
  router.delete("/:id", (req, res) => {
    Fitness.destroy({
      where: {
        id: req.params.id
      }
    }).then(delFitness => {
      res.json(delFitness);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
const express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const router = express.Router();
const {User, Fitness} = require("../../models");
const { withAuth } = require("../../utils/auth")

//find all fitness data entries with associated users
router.get("/", (req, res) => {
    Fitness.findAll({ 
      // where userId??
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
        if(!dbFitness) {
          return res.status(404).json({msg:'not found'})
        }
        res.json(dbFitness);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //create fitness data entry 
  router.post("/", withAuth, (req, res) => {

    console.log(req.user)
    Fitness.create({
      userId:req.user,
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
  router.put("/:id", withAuth, (req, res) => {
    Fitness.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.user
      }
    }).then(updatedFitness => {
      if(!updatedFitness[0]) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(updatedFitness);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete fitness data entry
  router.delete("/:id", withAuth, (req, res) => {
    Fitness.destroy({
      where: {
        id: req.params.id,
        userId: req.user
      }
    }).then(delFitness => {
      if(!delFitness) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(delFitness);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
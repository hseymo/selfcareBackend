const express = require('express');
const router = express.Router();
const {User, Sleep} = require("../../models");

//find all sleep data entries with associated users
router.get("/", (req, res) => {
    Sleep.findAll({ 
      include: [User]
    })
      .then(dbSleep => {
        res.json(dbSleep);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //find one sleep data entry and associated user
  router.get("/:id", (req, res) => {
    Sleep.findByPk(req.params.id,
      {include: [User]
    })
      .then(dbSleep => {
        res.json(dbSleep);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //create sleep data entry 
  router.post("/", (req, res) => {
    Sleep.create({
      // userId:req.session.user.id,
      date: req.body.date,
      time_asleep:req.body.time_asleep,
      diff_falling_asleep:req.body.diff_falling_asleep,
      diff_staying_asleep: req.body.diff_staying_asleep,
      mood_upon_wake: req.body.mood_upon_wake
    })
      .then(newSleep => {
        res.json(newSleep);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //update sleep data entry
  router.put("/:id", (req, res) => {
    Sleep.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedSleep => {
      res.json(updatedSleep);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete sleep data entry
  router.delete("/:id", (req, res) => {
    Sleep.destroy({
      where: {
        id: req.params.id
      }
    }).then(delSleep => {
      res.json(delSleep);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
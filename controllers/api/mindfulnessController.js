const express = require('express');
const router = express.Router();
const {User, Mindfulness} = require("../../models");

//find all mindfulness data entries and associated user
router.get("/", (req, res) => {
    Mindfulness.findAll({ 
      include: [User]
    })
      .then(dbMindfulness => {
        res.json(dbMindfulness);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //find one mindfulness data entry and associated user
  router.get("/:id", (req, res) => {
    Mindfulness.findByPk(req.params.id,
      {include: [User]
    })
      .then(dbMindfulness => {
        res.json(dbMindfulness);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //create mindfulness data entry
  router.post("/", (req, res) => {
  Mindfulness.create({
      // userId:req.session.user.id,
      date:req.body.date,
      activites_completed:req.body.activities_completed,
      overall_mood: req.body.overall_mood,
      quote_of_the_day: req.body.quote_of_the_day,
      journal: req.body.journal
    })
      .then(newMindfullness => {
        res.json(newMindfullness);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //update mindfulness data entry
  router.put("/:id", (req, res) => {
    Mindfulness.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedMindfullness => {
      res.json(updatedMindfullness);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete a mindfulness data entry
  router.delete("/:id", (req, res) => {
    Mindfulness.destroy({
      where: {
        id: req.params.id
      }
    }).then(delMindfulness => {
      res.json(delMindfulness);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
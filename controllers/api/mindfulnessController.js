const express = require('express');
const router = express.Router();
const {User, Mindfulness} = require("../../models");
const { withAuth } = require("../../utils/auth")

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
        if(!dbMindfulness) {
          return res.status(404).json({msg:'not found'})
        }
        res.json(dbMindfulness);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

    //find one mindfulness data entry by date and userId
    router.get("/user/me/:date", withAuth, (req, res) => {
      Mindfulness.findOne({
        where: {
          userId: req.user,
          date: req.params.date
        }
      })
        .then(dbMindfulness => {
          if(!dbMindfulness) {
            return res.status(404).json({msg:'not found'})
          }
          res.json(dbMindfulness);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ msg: "an error occured", err });
        });
    });

  //find all mindfulness data entries for one user
router.get("/user/me", withAuth, (req, res) => {
  Mindfulness.findAll({ 
    where: {
      userId: req.user
    }
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
  router.post("/", withAuth, (req, res) => {
  Mindfulness.create({
    userId:req.user,
      date:req.body.date,
      activities_completed:req.body.activities_completed,
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
  router.put("/update", withAuth, (req, res) => {
    Mindfulness.update(req.body, {
      where: {
        userId: req.user,
        date: req.body.date
      }
    }).then(updatedMindfulness => {
      if(!updatedMindfulness[0]) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(updatedMindfulness);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete a mindfulness data entry
  router.delete("/user/me/:date", withAuth, (req, res) => {
    Mindfulness.destroy({
      where: {
        date: req.params.date,
        userId: req.user
      }
    }).then(delMindfulness => {
      if(!delMindfulness) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(delMindfulness);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
const express = require('express');
const router = express.Router();
const {User, Sleep} = require("../../models");
const { withAuth } = require("../../utils/auth")

//find all sleep data entries with associated users
router.get("/", (req, res) => {
    Sleep.findAll()
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
        if(!dbSleep) {
          return res.status(404).json({msg:'not found'})
        }
        res.json(dbSleep);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

      //find one sleep data entry by date and userId
      router.get("/user/me/:date", withAuth, (req, res) => {
        Sleep.findOne({
          where: {
            userId: req.user,
            date: req.params.date
          }
        })
          .then(dbSleep => {
            if(!dbSleep) {
              return res.status(404).json({msg:'not found'})
            }
            res.json(dbSleep);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
          });
      });

  //find all sleep data entries for one user
router.get("/user/me", withAuth, (req, res) => {
  Sleep.findAll({ 
    where: {
      userId:req.user,
    }
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
  router.post("/", withAuth, (req, res) => {
    Sleep.create({
      userId:req.user,
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
  router.put("/update", withAuth, (req, res) => {
    Sleep.update(req.body, {
      where: {
        userId: req.user,
        date: req.body.date
      }
    }).then(updatedSleep => {
      if(!updatedSleep[0]) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(updatedSleep);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete sleep data entry
  router.delete("/user/me/:date", withAuth, (req, res) => {
    Sleep.destroy({
      where: {
        date: req.params.date,
        userId: req.user
      }
    }).then(delSleep => {
      if(!delSleep) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(delSleep);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
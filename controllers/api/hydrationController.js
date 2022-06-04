const express = require('express');
const router = express.Router();
const {User, Hydration} = require("../../models");
const { withAuth } = require("../../utils/auth")

//find all hydration data entries with associated users 
router.get("/", (req, res) => {
    Hydration.findAll({ 
      include: [User]
    })
      .then(dbHydrations => {
        res.json(dbHydrations);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //find one hydration data entry with associated user
  router.get("/:id", (req, res) => {
    Hydration.findByPk(req.params.id,
      {include: [User]
    })
      .then(dbHydration => {
        if(!dbHydration) {
          return res.status(404).json({msg:'not found'})
        }
        res.json(dbHydration);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  //find all hydration data entries with associated users 
router.get("/user/me", withAuth, (req, res) => {
  Hydration.findAll({ 
    where: {
      userId: req.user
    }
  })
    .then(dbHydrations => {
      res.json(dbHydrations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
  
  //create hydration data entry with associated users 
  router.post("/", withAuth, (req, res) => {
  Hydration.create({
      userId:req.user,
      date:req.body.date,
      water_oz:req.body.water_oz,
    })
      .then(newHydration => {
        res.json(newHydration);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
  
  //update hydration data entry
  router.put("/:id", withAuth, (req, res) => {
    Hydration.update(req.body, {
      where: {
        userId: req.user,
        id: req.params.id
      }
    }).then(updatedHydration => {
      console.log(updatedHydration)
      if(!updatedHydration[0]) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(updatedHydration);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  //delete hydration data entry
  router.delete("/:id", withAuth, (req, res) => {
    Hydration.destroy({
      where: {
        id: req.params.id,
        userId: req.user
      }
    }).then(delHydration => {
      if(!delHydration) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(delHydration);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;
  
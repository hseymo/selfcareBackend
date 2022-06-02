const express = require('express');
const router = express.Router();
const {User, Fitness, Goals, Hydration, Mindfulness, Sleep} = require("../../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const req = require('express/lib/request');
const { withAuth } = require("../../utils/auth")

//find all users with associated blogs and comments
router.get("/", (req, res) => {
  User.findAll({
    include:[Fitness, Goals, Hydration, Mindfulness, Sleep]
  })
    .then(dbUsers => {
      res.json(dbUsers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.get("/verifyToken", withAuth, (req,res) => {
  res.json({userId: req.user})
})

//find one user by user id
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id,{
    include:[Fitness, Goals, Hydration, Mindfulness, Sleep]
  })
    .then(dbUser => {
      if(!dbUser) {
        return res.status(404).json({msg:'not found'})
      }
      res.json(dbUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {
  User.create(req.body, {individualHooks: true})
    .then(newUser => {
      const token = jwt.sign(
        {
          first_name: newUser.first_name,
          userId: newUser.id
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h"
        }
      );
      res.json({ 
          token: token, 
          user: newUser
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//login user; find one user by email address. if not found (or password incorrect with bcrypt compare) send 400 bad request (client error). if successful, create session for user.
router.post("/login", (req, res) => {
  User.findOne({
    where:{
      email:req.body.email
    }
  }).then(dbUser=>{
      if(!dbUser){
        console.log("no user")
          return res.status(403).send("invalid credentials")
      } 
      if (bcrypt.compareSync(req.body.password,dbUser.password)) {
          const token = jwt.sign(
            {
              first_name: dbUser.first_name,
              id: dbUser.id
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "2h"
            }
          );
          return res.json({ 
              token: token, 
              user: dbUser
          });
        } else {
          return res.status(403).send("invalid credentials");
        }
  }).catch(err=>{
      console.log(err)
      res.status(500).json({msg:"an error occured",err})
  })
});

//protected route, request must include an authorization header with a bearer token
router.get("/dashboard", (req, res) => {
  //logging header data
  console.log(req.headers);
  //stripping token info from header data
  const token = req.headers?.authorization?.split(" ").pop();
  //login token
  console.log(token);
  //verifying token is valid, was signed with same secret
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    //if err, invalid token, user not authorized
    if (err) {
      console.log(err);
      res.status(403).json({ msg: "invalid credentials", err });
    } else {
      //if no err, user valid, can continue 
      User.findByPk(data.id).then(userData=>{
          console.log(userData.get({plain:true}));
          res.json(`Welcome to the club, ${userData.email}!`)
      })
    }
  });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const playersModel = require("./PlayersModel");
var cidade;
// const articlesModel = require("./ArticlesModel");

// Project.findAll({ where: { name: 'A Project' } }).then(projects => {
//   // projects will be an array of Project instances with the specified name
// })


router.get("/player/profile", (req, res) => {

  console.log(req.query);
  
  // if(kwhmensal<50){

  // }
  playersModel.findAll({where:{cidade:'sp'}}).then((players) => { 

       res.render("partials/adminViews/articlesViews/playerIndex",{players: players,});


     });

 });
 
 // req.query


router.post("/player/save", (req, res) => {
    
    var kwhmensal = req.body.kwhmensal;
    var nome = req.body.nome;
    var cidade=req.body.cidade;
   
    playersModel
      .create({
        kwhmensal: kwhmensal,
        nome:nome,
        cidade:cidade,
       
      })
      .then(() => {
        res.redirect("/player/profile");
      });
  });
  
  
  
    module.exports = router;
const express = require("express");
const router = express.Router();
// const playersModel = require("./PlayersModel");
const articlesModel = require("../articles/ArticlesModel");
// const categoriesModel = require("../categories/CategoriesModel");

// Project.findAll({ where: { name: 'A Project' } }).then(projects => {
//   // projects will be an array of Project instances with the specified name
// })

router.get("/player/profile", (req, res) => {
  
  console.log(req.query);
  let kwhmensal = req.query.kwhmensal;
 
  var convert_kmhmensal_int = parseFloat(kwhmensal);

  if(convert_kmhmensal_int<50){

  var nivel_economia ='baixo';
    articlesModel.findAll({ where: { economia: nivel_economia }})
      .then((articles) => {
        res.render("partials/adminViews/articlesViews/playerIndex", {
          articles: articles,
        });
      });
    }

    if(convert_kmhmensal_int>50 && convert_kmhmensal_int<100){

      var nivel_economia ='medio';
        articlesModel.findAll({ where: { economia: nivel_economia }})
          .then((articles) => {
            res.render("partials/adminViews/articlesViews/playerIndex", {
              articles: articles,
            });
          });
        }
        else

          var nivel_economia ='alto';
            articlesModel.findAll({ where: { economia: nivel_economia }})
              .then((articles) => {
                res.render("partials/adminViews/articlesViews/playerIndex", {
                  articles: articles,
                });
              });

});

// req.query

router.post("/player/save", (req, res) => {
  var kwhmensal = req.body.kwhmensal;
  var nome = req.body.nome;
  var cidade = req.body.cidade;

  playersModel
    .create({
      kwhmensal: kwhmensal,
      nome: nome,
      cidade: cidade,
    })
    .then(() => {
      res.redirect("/player/profile");
    });
});

module.exports = router;

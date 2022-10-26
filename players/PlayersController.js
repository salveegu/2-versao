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

  let nome = req.query.nome;
  let cidade = req.query.cidade;

  var convert_kmhmensal_int = parseFloat(kwhmensal);

  let nivel_economia;

  console.log(convert_kmhmensal_int);

  if (convert_kmhmensal_int < 50) {
    nivel_economia = 'baixo';
  } else if (convert_kmhmensal_int >= 50 && convert_kmhmensal_int <=100) {
    nivel_economia = 'medio';
  } else {
    nivel_economia = 'alto';
  }

  console.log(nivel_economia);

  articlesModel.findAll({ where: { economia: nivel_economia } })
    .then((articles) => {
      let total =0;

      articles.forEach(article => {

        let convert_preco = parseFloat(article.preco);
        
        total = convert_preco+total;

      });

      res.render("partials/adminViews/articlesViews/playerIndex", {
        articles: articles,
        cidade,
        nome,
        total
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

module.exports = router;

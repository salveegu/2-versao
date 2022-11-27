const express = require("express");
const articlesModel = require("./ArticlesModel");
const router = express.Router();
const categoriesModel = require("../categories/CategoriesModel");
const slugify = require("slugify");
// const adminAuth = require("../middlewares/adminAuth");
// const charset_encodings = require("mysql2/lib/constants/charset_encodings");

router.get("/admin/articles", (req, res) => {
  articlesModel
    .findAll({
      include: [{ model: categoriesModel }],
      order: [["id", "DESC"]],
    })
    .then((articles) => {
      if (articles != undefined) {
      categoriesModel.findAll().then((categories) => { 
      res.render("partials/adminViews/articlesViews/indexArticles", {
        categories:categories,
        articles: articles
        
      
      });
    });
}else{
  res.redirect("/home");
 }
})
});

// essa parte resume como eu trago os dados do back para o front

router.get("/admin/articles/new", (req, res) => {
  categoriesModel.findAll().then((categories) => {
    res.render("partials/adminViews/articlesViews/newArticles", {
      categories: categories,
    });
  });
});

router.post("/articles/save",(req, res) => {
  var title = req.body.title;
  var category = req.body.category;
  var preco = req.body.preco;
  var potencia=req.body.potencia;
  var economia = req.body.economia;
  var marca = req.body.marca;
  var link = req.body.link;
  var body = req.body.body;
 
 
 
  articlesModel
    .create({
      title: title,
      slug: slugify(title),
      categoryId: category,
      preco:preco,
      potencia:potencia,
      economia:economia,
      marca:marca,
      link: link,
      body: body,
      

    })
    .then(() => {
      res.redirect("/admin/articles");
    });
});

router.post("/admin/articles/delete",(req, res) => {
  var id = req.body.id;

  if (id != undefined) {
    if (!isNaN(id)) {
      articlesModel
        .destroy({
          where: {
            id: id,
          },
        })
        .then(() => {
          res.redirect("/admin/articles");
        });
    } else {
      //se nao for um numero
      res.redirect("/admin/articles");
    }
  } else {
    //se for nulo
    res.redirect("/admin/articles");
  }
});

router.get("/admin/articles/edit/:id",(req, res) => {
  var id = req.params.id;
  articlesModel.findByPk(id).then((article) => {
      if (article != undefined) {
        categoriesModel.findAll().then((categories) => {
          res.render("partials/adminViews/articlesViews/editArticles", {
            categories: categories,
            article: article,
          });
        });
      } else {
        res.redirect("/home");
      }
    })
    .catch((err) => {
      res.redirect("/home");
    });
});

router.post("/admin/articles/update", (req,res) => {
  var id = req.body.id;
  var title = req.body.title;
  var category = req.body.category;
  var preco = req.body.preco;
  var potencia=req.body.potencia;
  var economia = req.body.economia;
  var marca = req.body.marca;
  var link = req.body.link;
  var body = req.body.body;
 

  

  articlesModel.update(
      {  title: title, body: body,preco:preco,potencia:potencia,economia:economia, categoryId: category, slug: slugify(title),link:link,marca:marca },
      {
        where: {
          id: id,
        },
      }
    )
    .then(() => {
      res.redirect("/admin/articles");
    })
    .catch((err) => {
      res.redirect("/home");
    });
});

router.get("/articles/page/:num", (req, res) => {
  var page = req.params.num;
  
  
  // logica offset
  // indice
  // page     off set
  // 1=      0 - 3
  // 2=      4 - 7
  // 3=      8 - 11  
  // 4 =     12 - 15
  // 5 =     16 - 19 

  var offset = 0;

  if (isNaN(page) || page == 1) {
    offset = 0;
  } else {
    offset = (parseInt(page) - 1) * 4;
  }

  articlesModel.findAndCountAll({
    limit: 4,
    offset: offset,
    order: [
      ['id','DESC']
     ]
  }).then((articles) => {
    var next;
    if (offset + 4 >= articles.count) {
      next = false;
    } else {
      next = true;
    }

    var result = {
      page: parseInt(page),
      next: next,
      articles: articles,
      name: "gustavo"
    };

    articlesModel.findAll().then((categories) => {
      res.render("partials/adminViews/articlesViews/articlesPage", {
        result: result,
        categories: categories,
        
      });
    });
  });
});




module.exports = router;

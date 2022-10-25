const express = require("express");
const router = express.Router();
const categoriesModel = require("./CategoriesModel");
const slugify = require("slugify");
// const Category = require("./CategoriesModel");

router.get("/categories", (req, res) => {
  res.send("Categories router!");
});

router.post("/categories/save", (req, res) => {
  //formulario trabalha com o metodo POST
  var title = req.body.title; //pegando meu dado digitado no front-end
  if (title != undefined) {
    categoriesModel
      .create({
        title: title,
        slug: slugify(title),
      })
      .then(() => {
        res.redirect("/admin/categories");
      });
  } else {
    res.redirect("/admin/categories/new");
  }
});

router.get("/admin/categories", (req, res) => {
  categoriesModel.findAll().then((categories) => {
    //buscando meus dados no banco de dados
    res.render("partials/adminViews/categoriesViews/indexCategories", {
      categories: categories,
    });
  });
});

router.get("/admin/categories/new", (req, res) => {
  res.render("partials/adminViews/categoriesViews/newCategories");
});

router.post("/admin/categories/delete", (req, res) => {
  var id = req.body.id;

  if (id != undefined) {
    if (!isNaN(id)) {
      categoriesModel
        .destroy({
          where: {
            id: id,
          },
        })
        .then(() => {
          res.redirect("/admin/categories");
        });
    } else {
      //se nao for um numero
      res.redirect("/admin/categories");
    }
  } else {
    //se for nulo
    res.redirect("/admin/categories");
  }
});

router.get("/admin/categories/edit/:id", (req, res) => {
  var id = req.params.id;

    if(isNaN(id)){
      res.redirect("/admin/categories");
    }
  categoriesModel.findByPk(id).then((category) => {
    if(category != undefined){

      res.render("partials/adminViews/categoriesViews/editCategories",{category:category});

    }else{
      res.redirect("/admin/categories");
    }
  }).catch(erro => {
    res.redirect("/admin/categories");
  })
});

router.post("/admin/categories/update",(req,res)=>{

  var id = req.body.id;
  var title = req.body.title;

  categoriesModel.update({title:title,slug: slugify(title)},{
    where:{
      id:id
    }
  }).then(()=>{
    res.redirect("/admin/categories");
  })

});

module.exports = router;

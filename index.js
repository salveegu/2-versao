const express  = require("express");
const app = express();
const bodyParser = require("body-parser");
// import database
const connection = require("./database/database");
//import route Controller
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
//import models
const articlesModel = require("./articles/ArticlesModel");
const categoriesModel = require("./categories/CategoriesModel");

const usersController = require("./users/UsersController");
// const usersModel = require("./users/UsersModel");

// const playersModel = require("./players/PlayersModel");
const playersController = require("./players/PlayersController");

const session = require("express-session");

//sessions

app.use(session({
    secret: "qualquercoisa",cookie: {maxAge: 3000000}
}))

//view engine
app.set('view engine','ejs');

//static files
app.use(express.static('public'));

//body parser to use forms and read jason files
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

connection.authenticate().then(()=>{
    console.log("Database connection successful");
}).catch((error)=>{
    console.log(error);
});

app.get("/home",(req,res)=>{
    
    articlesModel.findAll({
       order: [
        ['id','DESC']
       ],
       limit:4
    }).then(articles =>{

        categoriesModel.findAll().then(categories =>{
        res.render("home",{articles:articles,categories:categories})

        });
       
    });
});


app.get("/:slug",(req,res) => {
    var slug = req.params.slug;
    articlesModel.findOne({
        where: {
            slug:slug
        }
    }).then(article => {
        if(article != undefined){
           
        categoriesModel.findAll().then(categories =>{
        res.render("eachArticle",{article:article,categories:categories})
    });
        }else{
            res.redirect("/home");
        }
    }).catch( err => {
        res.redirect("/home")
    })
})


app.get("/category/:slug",(req, res) => {
    var slug = req.params.slug;
    categoriesModel.findOne({
        where: {
            slug: slug
        },
        include: [{model: articlesModel}]
    }).then( category => {
        if(category != undefined){
            categoriesModel.findAll().then(categories => {
                res.render("home",{articles: category.articles,categories: categories});
            });
        }else{
            res.redirect("/home");
        }
    }).catch( err => {
        res.redirect("/home");
    })
})


app.get("/session",(req,res)=>{

})

app.get("/leitura",(req,res)=>{

})

app.use("/",categoriesController);
app.use("/",articlesController);
app.use("/",usersController);
app.use("/",playersController);

app.listen(8080,()=>{
    console.log("the server is online!");
});
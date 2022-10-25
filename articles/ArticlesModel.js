const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/CategoriesModel");

const Article = connection.define('articles',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    }, preco:{
        type:Sequelize.STRING,
        allowNull:false
    }, potencia:{
        type:Sequelize.STRING,
        allowNull:false
    }, economia:{
        type:Sequelize.STRING,
        allowNull:false
    }, link:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

Article.belongsTo(Category); //1-p-1
Category.hasMany(Article); //1-p-n

// Article.sync({force:true}); 
//deixar sempre desativado depois de criado as tabelas


module.exports = Article;

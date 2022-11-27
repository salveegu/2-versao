const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/CategoriesModel");

const Produto = connection.define('produtos',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    preco:{
        type:Sequelize.STRING,
        allowNull:false
    }, potencia:{
        type:Sequelize.STRING,
        allowNull:false
    }, economia:{
        type:Sequelize.STRING,
        allowNull:false
    }, marca:{
        type:Sequelize.STRING,
        allowNull:false
    }, link:{
        type:Sequelize.STRING,
        allowNull:false
    },body:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

Produto.belongsTo(Category); //1-p-1
Category.hasMany(Produto); //1-p-n

// Article.sync({force:true}); 
// deixar sempre desativado depois de criado as tabelas


module.exports = Article;

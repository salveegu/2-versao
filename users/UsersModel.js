const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define('users',{
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User

// User.sync({force:true}); //depois de criar a tabela desativar
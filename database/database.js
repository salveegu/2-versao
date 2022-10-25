const Sequelize = require("sequelize");
const connection =  new Sequelize('produtos','root','admin',{

    host:'localhost',
    dialect:'mysql',
    logging:false,
    timezone: "-3:00"
});

module.exports = connection;
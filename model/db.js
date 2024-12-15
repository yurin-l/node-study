var Sequelize = require("sequelize");
var sequelize;

sequelize = new Sequelize("class101", "root","1234",{
    host:"localhost",
    port:"3306",
    dialect:"mysql",
    timzone: "+09:00",
    define:{
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps:true,
        freezeTableName:true
    }
})

var db = {};
db.users = require(__dirname + "/users.js")(sequelize, Sequelize.DataTypes);

db.sequelize =sequelize;
db.Sequelize=Sequelize;

module.exports = db;
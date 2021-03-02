const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// defining the tables in db according to sequelize 
db.user = require("../models/users.js")(sequelize, Sequelize);
db.role = require("../models/roles.js")(sequelize, Sequelize);
db.message = require("../models/messages.js")(sequelize, Sequelize);
// doing the association between the tables
db.role.hasMany(db.user, {as: 'users'});
db.user.belongsTo(db.role, {foreignKey: 'roleId', as: 'role'});
db.message.belongsTo(db.user, {foreignKey: 'idUsers', as: 'sender'});
db.message.belongsTo(db.user, {foreignKey: 'receiverId', as: 'receiver'});

db.ROLES = ["user", "admin"];

module.exports = db;
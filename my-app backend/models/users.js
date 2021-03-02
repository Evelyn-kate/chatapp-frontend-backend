
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      idUsers: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN, 
        allowNull: false, 
        defaultValue: true
      }
    });
  
    return User;
  };
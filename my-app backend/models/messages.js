module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("messages", {
      idmessages: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      message: {
        type: Sequelize.STRING
      },
      idUsers: {
        type: Sequelize.INTEGER
      },
      receiverId: {
        type: Sequelize.INTEGER
      }
    });
  
    return Message;
  };
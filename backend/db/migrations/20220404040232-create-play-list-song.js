'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlayListSongs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      songId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"Songs"}
      },
      playListId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"PlayLists"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlayListSongs');
  }
};

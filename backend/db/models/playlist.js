'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayList = sequelize.define('PlayList', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  PlayList.associate = function(models) {
    // associations can be defined here
    PlayList.belongsTo(models.User, {foreignKey: 'userId'});
    PlayList.belongsToMany(models.Song, {
      through: 'PlayListSong',
      foreignKey: 'playListId'
    })
  };
  return PlayList;
};

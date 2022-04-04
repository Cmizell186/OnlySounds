'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayListSong = sequelize.define('PlayListSong', {
    songId: DataTypes.INTEGER,
    playListId: DataTypes.INTEGER
  }, {});
  PlayListSong.associate = function(models) {
    // associations can be defined here
    PlayListSong.belongsTo(models.PlayList, {foreignKey: 'playListId'});
    PlayListSong.belongsTo(models.Song, {foreignKey: 'songId'});
  };
  return PlayListSong;
};

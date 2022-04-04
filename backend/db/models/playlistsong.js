'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayListSong = sequelize.define('PlayListSong', {
    songId: DataTypes.INTEGER,
    playListId: DataTypes.INTEGER
  }, {});
  PlayListSong.associate = function(models) {
    // associations can be defined here
  };
  return PlayListSong;
};

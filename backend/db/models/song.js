'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, {foreignKey: 'userId'});
    Song.hasMany(models.Comment, {foreignKey: 'songId'});
    Song.hasMany(models.PlayListSong, {foreignKey: 'songId'});
    Song.hasMany(models.Like, {foreignKey: 'songId'});
  };
  return Song;
};

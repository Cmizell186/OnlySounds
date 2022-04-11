'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    songUrl: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, {foreignKey: 'userId'});
    Song.hasMany(models.Comment, {foreignKey: 'songId', hooks: true, onDelete:"cascade"});
    Song.hasMany(models.Like, {foreignKey: 'songId'});
    Song.belongsToMany(models.PlayList, {
      through: "PlayListSong",
      otherKey: "playListId",
      foreignKey: 'songId'
    })
  };
  return Song;
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [
    {
      userId: 1,
      songId: 1,
      description: 'This song is epic!'
    },
    {
      userId: 3,
      songId: 1,
      description: 'This song is awesome, great find!'
    },
    {
      userId: 2,
      songId: 1,
      description: 'This song is pretty cool!'
    },

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};

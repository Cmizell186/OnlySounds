'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {userId:1,title: '3005 Beach Pinic Version', songUrl: 'https://onlysounds.s3.us-west-1.amazonaws.com/songs/Childish+Gambino+-+3005+(Beach+Picnic+Version).mp3'},
      {userId:1,title: 'Juice', songUrl: 'https://onlysounds.s3.us-west-1.amazonaws.com/songs/Chance+The+Rapper+-+Juice.mp3'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};

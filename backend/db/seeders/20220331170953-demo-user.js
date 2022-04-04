'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      email: "demo@user.io",
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "test@test.com",
      username: 'Demo',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "user2@demo.io",
      username: 'Demo-User2',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "chris@gmail.com",
      username: 'chris',
      hashedPassword: bcrypt.hashSync('password')
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Demo-User1', 'Demo-User2'] }
    }, {});
  }
};

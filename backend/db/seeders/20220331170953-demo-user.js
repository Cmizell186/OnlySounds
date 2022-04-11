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
      username: 'XXXTentacion',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "Kanye@west.io",
      username: 'Kanye-West',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "chris@gmail.com",
      username: 'chris',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "kodak@gmail.com",
      username: 'Kodak Black',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "one@direction.com",
      username: 'Harry Styles',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "chance@3chance.com",
      username: 'Chance The Rapper',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: "onedirection@gmail.com",
      username: 'OneDirection',
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

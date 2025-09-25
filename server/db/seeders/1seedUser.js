'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // генерим хэши паролей
    const password1 = await bcrypt.hash('password123', 10);
    const password2 = await bcrypt.hash('qwerty456', 10);
    const password3 = await bcrypt.hash('secret789', 10);
    const password4 = await bcrypt.hash('admin000', 10);

    await queryInterface.bulkInsert('Users', [
      {
        login: 'genz_girl',
        email: 'genz@example.com',
        hashpass: password1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'millennial_dev',
        email: 'millennial@example.com',
        hashpass: password2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'toxic_boomer',
        email: 'boomer@example.com',
        hashpass: password3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'admin',
        email: 'admin@example.com',
        hashpass: password4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
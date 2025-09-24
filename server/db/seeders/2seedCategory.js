'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        gen: 'gen-z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gen: 'millennial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gen: 'boomer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }}
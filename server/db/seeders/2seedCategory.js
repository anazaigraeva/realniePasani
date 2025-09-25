'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          gen: 'gen-z',
          description: 'ololo',
        },
        {
          gen: 'millennial',
          description: 'ololo',
        },
        {
          gen: 'boomer',
          description: 'ololo',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

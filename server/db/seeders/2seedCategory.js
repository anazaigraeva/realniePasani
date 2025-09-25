'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          gen: 'zoomer',
          description: 'годы рождения 1997–2012, родились в интернете; соцсети, визуальная культура, самовыражение, экология.',
        },
        {
          gen: 'Millennial',
          description: 'годы рождения 1981–1996, первые «цифровые»; ценят гибкость, обучение, опыт, баланс работы и личной жизни.',
        },
        {
          gen: 'Generation X',
          description: 'годы рождения 1965–1980, независимые, скептичные; застали жизнь без интернета и цифровую революцию.',
        },
        {
          gen: 'Boomer',
          description: 'годы рождения 1946–1964, послевоенное поколение; ценят карьеру, стабильность, традиции, материальное благополучие.',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

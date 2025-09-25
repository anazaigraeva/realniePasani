'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [
      {
        userId: 1, // genz_girl
        wordId: 4, // Нетворкинг
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2, // millennial_dev
        wordId: 1, // Кринж
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        wordId: 2, // Шейм
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3, // toxic_boomer
        wordId: 6, // Вайб
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        wordId: 5, // Лайфхак
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4, // admin
        wordId: 7, // Гаджет
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        wordId: 8, // Блогер
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  }
};
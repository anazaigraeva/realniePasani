'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Words', [
      {
        sleng: 'Кринж',
        description: 'Что-то настолько неловкое или неуместное, что вызывает чувство стыда',
        example: 'Его танцы на корпоративе были полным кринжем',
        translate: null,
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Шейм',
        description: 'Публичное осуждение или критика кого-то за определенное поведение',
        example: 'Его зашеймили за неэкологичный образ жизни',
        translate: null,
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Токсик',
        description: 'Человек с деструктивным поведением, который негативно влияет на окружающих',
        example: 'Этот токсик испортил всю атмосферу в команде',
        translate: null,
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Нетворкинг',
        description: 'Налаживание профессиональных связей и контактов',
        example: 'На конференции я активно занимался нетворкингом',
        translate: null,
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Лайфхак',
        description: 'Простой способ решения повседневных задач',
        example: 'Покажу лайфхак, как быстро почистить микроволновку',
        translate: null,
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Вайб',
        description: 'Атмосфера, настроение или энергия места или человека',
        example: 'В этом кафе очень уютный вайб',
        translate: null,
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Гаджет',
        description: 'Небольшое электронное устройство или техническая новинка',
        example: 'Купил новый гаджет для умного дома',
        translate: null,
        userId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Блогер',
        description: 'Человек, который ведет блог в интернете',
        example: 'Мой племянник стал популярным блогером',
        translate: null,
        userId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  }
};
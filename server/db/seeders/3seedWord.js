'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Words', [
      // Zoomer (CategoryId: 1) - 20 слов
      {
        sleng: 'Кринж',
        description: 'Что-то настолько неловкое или неуместное, что вызывает чувство стыда',
        example: 'Его танцы на корпоративе были полным кринжем',
        translate: 'Cringe',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Шейм',
        description: 'Публичное осуждение или критика кого-то за определенное поведение',
        example: 'Его зашеймили за неэкологичный образ жизни',
        translate: 'Shame',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Токсик',
        description: 'Человек с деструктивным поведением, который негативно влияет на окружающих',
        example: 'Этот токсик испортил всю атмосферу в команде',
        translate: 'Toxic person',
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Вайб',
        description: 'Атмосфера, настроение или энергия места или человека',
        example: 'В этом кафе очень уютный вайб',
        translate: 'Vibe',
        userId: 3,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Хейтер',
        description: 'Человек, который постоянно критикует и осуждает других',
        example: 'Не обращай внимания на хейтеров в комментариях',
        translate: 'Hater',
        userId: 4,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Кринжовый',
        description: 'Вызывающий чувство неловкости и стыда',
        example: 'Этот мем такой кринжовый, даже смотреть больно',
        translate: 'Cringy',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Скибиди',
        description: 'Бессмысленное или абсурдное действие (из мемов)',
        example: 'Что за скибиди он вытворяет?',
        translate: 'Skibidi',
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Флекс',
        description: 'Хвастовство, демонстрация своего превосходства',
        example: 'Перестань флексить своими новыми часами',
        translate: 'Flex',
        userId: 3,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Го',
        description: 'Предложение начать действовать или куда-то пойти',
        example: 'Го в кино сегодня вечером?',
        translate: 'Go',
        userId: 4,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Чиллить',
        description: 'Расслабляться, отдыхать, ничего не делать',
        example: 'Сегодня просто чиллим дома',
        translate: 'Chill',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Рофл',
        description: 'Что-то очень смешное, повод для смеха',
        example: 'Этот видос - просто рофл',
        translate: 'ROFL (Rolling On the Floor Laughing)',
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Кринжанул',
        description: 'Испытал чувство стыда за кого-то или что-то',
        example: 'Я кринжанул с его выступления',
        translate: 'Cringed',
        userId: 3,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Хайп',
        description: 'Ажиотаж, шумиха вокруг чего-либо',
        example: 'Вокруг нового айфона опять хайп',
        translate: 'Hype',
        userId: 4,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Буллинг',
        description: 'Травля, издевательства над кем-либо',
        example: 'В школе нельзя допускать буллинг',
        translate: 'Bullying',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Краш',
        description: 'Человек, который нравится, объект симпатии',
        example: 'Он мой краш уже полгода',
        translate: 'Crush',
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Сасный',
        description: 'Привлекательный, симпатичный (от англ. "sus")',
        example: 'Тот парень с сасный такой',
        translate: 'Suspicious/Sus',
        userId: 3,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Лойс',
        description: 'Одобрение, поддержка (от англ. "voice")',
        example: 'Ставлю лойс за этот контент',
        translate: 'Voice',
        userId: 4,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Зашквар',
        description: 'Что-то позорное, неудачное',
        example: 'Этот поступок - полный зашквар',
        translate: 'Disgrace',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Пруф',
        description: 'Доказательство, подтверждение',
        example: 'Покажи пруфы, что это правда',
        translate: 'Proof',
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Фидбэк',
        description: 'Обратная связь, отзыв',
        example: 'Жду фидбэк по моей работе',
        translate: 'Feedback',
        userId: 3,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Millennial (CategoryId: 2) - 20 слов
      {
        sleng: 'Нетворкинг',
        description: 'Налаживание профессиональных связей и контактов',
        example: 'На конференции я активно занимался нетворкингом',
        translate: 'Networking',
        userId: 4,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Лайфхак',
        description: 'Полезный совет для упрощения жизни',
        example: 'Покажу лайфхак, как быстро почистить микроволновку',
        translate: 'Life hack',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Селфи',
        description: 'Фотография самого себя, обычно на телефон',
        example: 'Сделаем селфи на фоне достопримечательности',
        translate: 'Selfie',
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Фуд-порн',
        description: 'Привлекательные фотографии еды',
        example: 'Выложил фуд-порн из ресторана',
        translate: 'Food porn',
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Френдзона',
        description: 'Отношения, где один влюблен, а другой видит только друга',
        example: 'Я попал в френдзону к своей подруге',
        translate: 'Friendzone',
        userId: 4,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Коворкинг',
        description: 'Общее рабочее пространство для фрилансеров',
        example: 'Арендую место в коворкинге',
        translate: 'Coworking',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Байкот',
        description: 'Бойкот, отказ от поддержки кого-либо',
        example: 'Объявили байкот этому бренду',
        translate: 'Boycott',
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Мейнстрим',
        description: 'Основное направление, массовая тенденция',
        example: 'Этот стиль уже стал мейнстримом',
        translate: 'Mainstream',
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Фейк',
        description: 'Подделка, обман',
        example: 'Эта новость оказалась фейком',
        translate: 'Fake',
        userId: 4,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Хипстер',
        description: 'Представитель молодежной субкультуры',
        example: 'В этом районе много хипстеров',
        translate: 'Hipster',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Байтить',
        description: 'Копировать чужой стиль или идеи',
        example: 'Не байть мой стиль!',
        translate: 'Bite',
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Гуглить',
        description: 'Искать информацию в интернете',
        example: 'Надо погуглить этот рецепт',
        translate: 'Google',
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Мерч',
        description: 'Фирменная продукция с логотипами',
        example: 'Купил мерч своей любимой группы',
        translate: 'Merch',
        userId: 4,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Овершейр',
        description: 'Излишнее раскрытие личной информации',
        example: 'Это уже овершейр, не нужно столько деталей',
        translate: 'Overshare',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Пранк',
        description: 'Шутка, розыгрыш',
        example: 'Снял пранк над другом',
        translate: 'Prank',
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Флешмоб',
        description: 'Массовая акция по заранее спланированному сценарию',
        example: 'Организовали флешмоб в центре города',
        translate: 'Flashmob',
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Шерить',
        description: 'Делиться чем-либо',
        example: 'Буду шерить свои заметки',
        translate: 'Share',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Юзать',
        description: 'Использовать',
        example: 'Я юзаю это приложение каждый день',
        translate: 'Use',
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'ЗОЖ',
        description: 'Здоровый образ жизни',
        example: 'Веду ЗОЖ уже год',
        translate: 'Healthy lifestyle',
        userId: 3,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Generation X (CategoryId: 3) - 20 слов
      {
        sleng: 'Гаджет',
        description: 'Небольшое электронное устройство',
        example: 'Купил новый гаджет для умного дома',
        translate: 'Gadget',
        userId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Блогер',
        description: 'Человек, ведущий блог в интернете',
        example: 'Мой племянник стал популярным блогером',
        translate: 'Blogger',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Интернет-серфинг',
        description: 'Бессистемное путешествие по интернету',
        example: 'Занимаюсь интернет-серфингом по вечерам',
        translate: 'Internet surfing',
        userId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Мейл',
        description: 'Электронная почта',
        example: 'Отправь мне на мейл документы',
        translate: 'Email',
        userId: 3,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Смайлик',
        description: 'Графическое изображение эмоции',
        example: 'Поставь смайлик в сообщении',
        translate: 'Smiley',
        userId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Чат',
        description: 'Общение в реальном времени через интернет',
        example: 'Переписываемся в чате',
        translate: 'Chat',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Файл',
        description: 'Электронный документ',
        example: 'Сохрани файл на флешку',
        translate: 'File',
        userId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Хакер',
        description: 'Компьютерный взломщик',
        example: 'Хакеры взломали сайт',
        translate: 'Hacker',
        userId: 3,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Спам',
        description: 'Нежелательная рассылка',
        example: 'В почте полно спама',
        translate: 'Spam',
        userId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Виртуальный',
        description: 'Существующий в цифровом пространстве',
        example: 'Виртуальная реальность',
        translate: 'Virtual',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Дискета',
        description: 'Устаревший носитель информации',
        example: 'Нашел старые дискеты в гараже',
        translate: 'Floppy disk',
        userId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Модем',
        description: 'Устройство для подключения к интернету',
        example: 'Раньше интернет был через модем',
        translate: 'Modem',
        userId: 3,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Пейджер',
        description: 'Устройство для получения сообщений',
        example: 'В 90-е у всех были пейджеры',
        translate: 'Pager',
        userId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Фрилансер',
        description: 'Свободный работник без постоянного работодателя',
        example: 'Работаю фрилансером уже 5 лет',
        translate: 'Freelancer',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Айтишник',
        description: 'Специалист в области информационных технологий',
        example: 'Мой сын стал айтишником',
        translate: 'IT specialist',
        userId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Клик',
        description: 'Нажатие кнопки мыши',
        example: 'Сделай клик по иконке',
        translate: 'Click',
        userId: 3,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Софт',
        description: 'Программное обеспечение',
        example: 'Установил новый софт',
        translate: 'Software',
        userId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Хард',
        description: 'Аппаратное обеспечение',
        example: 'Сломался хард',
        translate: 'Hardware',
        userId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Юзер',
        description: 'Пользователь',
        example: 'Обычный юзер компьютера',
        translate: 'User',
        userId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Бан',
        description: 'Блокировка пользователя',
        example: 'Получил бан на форуме',
        translate: 'Ban',
        userId: 3,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Boomer (CategoryId: 4) - 20 слов
      {
        sleng: 'Телевизор',
        description: 'Устройство для просмотра телепередач',
        example: 'Вечером смотрим телевизор',
        translate: 'Television',
        userId: 4,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Магнитофон',
        description: 'Устройство для записи и воспроизведения звука',
        example: 'На магнитофоне слушали кассеты',
        translate: 'Tape recorder',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Диафильм',
        description: 'Пленка с кадрами для проектора',
        example: 'В детстве смотрели диафильмы',
        translate: 'Filmstrip',
        userId: 2,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Кассета',
        description: 'Носитель информации на магнитной ленте',
        example: 'Перематывал кассету карандашом',
        translate: 'Cassette',
        userId: 3,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Винил',
        description: 'Пластинка для проигрывателя',
        example: 'Коллекционирую винил',
        translate: 'Vinyl',
        userId: 4,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Телетайп',
        description: 'Устройство для передачи сообщений',
        example: 'Новости получали по телетайпу',
        translate: 'Teletype',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Радиола',
        description: 'Комбинированное радио и проигрыватель',
        example: 'На радиоле слушали пластинки',
        translate: 'Radiogram',
        userId: 2,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Таксофон',
        description: 'Уличный телефон-автомат',
        example: 'Звонил с таксофона',
        translate: 'Payphone',
        userId: 4,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Фотоаппарат-мыльница',
        description: 'Компактный пленочный фотоаппарат',
        example: 'Снимал на мыльницу в путешествиях',
        translate: 'Point-and-shoot camera',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Дисковый телефон',
        description: 'Телефон с вращающимся диском',
        example: 'Набирал номер на дисковом телефоне',
        translate: 'Rotary phone',
        userId: 2,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Кинопленка',
        description: 'Пленка для киносъемки',
        example: 'Проявил кинопленку',
        translate: 'Film stock',
        userId: 3,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Проигрыватель',
        description: 'Устройство для воспроизведения пластинок',
        example: 'Купил новый проигрыватель',
        translate: 'Record player',
        userId: 4,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Катушечный магнитофон',
        description: 'Магнитофон с бобинами',
        example: 'На катушечном записывали голос',
        translate: 'Reel-to-reel tape recorder',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Слайд-проектор',
        description: 'Устройство для показа слайдов',
        example: 'Показывал слайды с отпуска',
        translate: 'Slide projector',
        userId: 2,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Электронная почта',
        description: 'Система отправки сообщений через интернет',
        example: 'Отправил письмо по электронной почте',
        translate: 'Email',
        userId: 3,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Факс',
        description: 'Устройство для передачи документов',
        example: 'Отправил договор по факсу',
        translate: 'Fax',
        userId: 4,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Пейджинговая связь',
        description: 'Система персонального радиовызова',
        example: 'Работал с пейджинговой связью',
        translate: 'Paging',
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Видеомагнитофон',
        description: 'Устройство для записи и воспроизведения видео',
        example: 'Арендовал фильм на видеомагнитофон',
        translate: 'VCR',
        userId: 2,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sleng: 'Карманный калькулятор',
        description: 'Портативное вычислительное устройство',
        example: 'Считал на карманном калькуляторе',
        translate: 'Pocket calculator',
        userId: 3,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  }
};
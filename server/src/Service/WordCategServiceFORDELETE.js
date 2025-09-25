const { Word } = require('../../db/models');

class WordCategService {
    static async getWordCateg(categoryId){
        return Word.findAll({ where: { categoryId }})
    }
}

module.exports = WordCategService;
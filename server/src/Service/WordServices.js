const { Word } = require('../../db/models')

class WordService {
    static async getAll() {
        return Word.findAll()
    }
}

module.exports = WordService
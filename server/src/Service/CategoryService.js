const {Category} = require('../../db/models');

class CategoryService {
    static async getAll(){
        return Category.findAll()
    }
}

module.exports = CategoryService;
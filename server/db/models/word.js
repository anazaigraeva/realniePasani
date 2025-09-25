'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {foreignKey: 'categoryId'})
      this.belongsTo(models.User,{foreignKey: 'userId'})
      this.hasMany(models.Like,{foreignKey: 'wordId'})
    }
    }
  
  Word.init({
    sleng: DataTypes.STRING,
    description: DataTypes.TEXT,
    example: DataTypes.TEXT,
    translate: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};
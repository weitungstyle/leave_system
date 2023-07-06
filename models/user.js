'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      User.hasMany(models.Leave, { foreignKey: 'applicant' })
      User.hasMany(models.Leave, { foreignKey: 'level1SupervisorId' })
      User.hasMany(models.Leave, { foreignKey: 'level2SupervisorId' })
      User.hasOne(models.User, {
        through: models.Supervisor,
        foreignKey: 'supervisorId',
        as: 'subordinate'
      })
      User.hasMany(models.User, {
        through: models.Supervisor,
        foreignKey: 'subordinateId',
        as: 'supervisor'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    registration: DataTypes.DATE,
    remaining: DataTypes.INTEGER,
    isWorking: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    underscored: true
  })
  return User
}

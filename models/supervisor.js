'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Supervisor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Supervisor.belongsTo(models.User, { foreignKey: 'supervisorId', as: 'supervisor' })
      Supervisor.belongsTo(models.User, { foreignKey: 'subordinateId', as: 'subordinate' })
    }
  }
  Supervisor.init({
    supervisorId: DataTypes.INTEGER,
    subordinateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Supervisor',
    tableName: 'Supervisors',
    underscored: true
  })
  return Supervisor
}

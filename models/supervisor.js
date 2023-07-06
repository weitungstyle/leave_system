'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supervisor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supervisor.belongsTo(models.User, {foreignKey: 'supervisorId', as: 'subordinate'})
      Supervisor.belongsTo(models.User, {foreignKey: 'subordinateId', as: 'supervisor'})
    }
  }
  Supervisor.init({
    supervisorId: DataTypes.INTEGER,
    subordinateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Supervisor',
    tableName: 'Supervisors'
  });
  return Supervisor;
};

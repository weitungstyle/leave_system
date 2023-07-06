'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Leave.belongsTo(models.User, { foreignKey: 'applicant' })
      // Leave.belongsTo(models.Supervisor, { foreignKey: 'level1Supervisor' })
      // Leave.belongsTo(models.Supervisor, { foreignKey: 'level2Supervisor' })
    }
  }
  Leave.init({
    leaveDate: DataTypes.DATE,
    content: DataTypes.TEXT,
    applicant: DataTypes.INTEGER,
    isActived: DataTypes.BOOLEAN,
    isCompleted: DataTypes.BOOLEAN,
    level1Supervisor: DataTypes.INTEGER,
    level1Approved: DataTypes.BOOLEAN,
    level2Supervisor: DataTypes.INTEGER,
    level2Approve: DataTypes.BOOLEAN,
    rejectReason: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Leave',
    tableName: 'Leaves'
  })
  return Leave
}

'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Leave.belongsTo(models.User, { foreignKey: 'applicantId' })
      Leave.belongsTo(models.User, { foreignKey: 'level1SupervisorId' })
      Leave.belongsTo(models.User, { foreignKey: 'level2SupervisorId' })
    }
  }
  Leave.init({
    leaveDate: DataTypes.DATE,
    content: DataTypes.TEXT,
    applicantId: DataTypes.INTEGER,
    isActived: DataTypes.BOOLEAN,
    isCompleted: DataTypes.BOOLEAN,
    level1SupervisorId: DataTypes.INTEGER,
    level1Approved: DataTypes.BOOLEAN,
    level2SupervisorId: DataTypes.INTEGER,
    level2Approved: DataTypes.BOOLEAN,
    rejectReason: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Leave',
    tableName: 'Leaves',
    underscored: true
  })
  return Leave
}

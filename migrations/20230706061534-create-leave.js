'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leaves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leaveDate: {
        type: Sequelize.DATE
      },
      content: {
        type: Sequelize.TEXT
      },
      applicant: {
        type: Sequelize.INTEGER
      },
      isActived: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      level1Supervisor: {
        type: Sequelize.INTEGER
      },
      level1Approved: {
        type: Sequelize.BOOLEAN
      },
      level2Supervisor: {
        type: Sequelize.INTEGER
      },
      level2Approve: {
        type: Sequelize.BOOLEAN
      },
      rejectReason: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Leaves');
  }
};

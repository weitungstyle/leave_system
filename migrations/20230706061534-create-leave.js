'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Leaves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leave_date: {
        type: Sequelize.DATE
      },
      content: {
        type: Sequelize.TEXT
      },
      applicant_id: {
        type: Sequelize.INTEGER
      },
      is_actived: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      is_completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      level1_supervisor_id: {
        type: Sequelize.INTEGER
      },
      level1_approved: {
        type: Sequelize.BOOLEAN
      },
      level2_supervisor_id: {
        type: Sequelize.INTEGER
      },
      level2_approved: {
        type: Sequelize.BOOLEAN
      },
      reject_reason: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Leaves')
  }
}

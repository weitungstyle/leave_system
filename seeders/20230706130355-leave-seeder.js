'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM Users WHERE role = 'user';`, { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    await queryInterface.bulkInsert('Leaves', [{
      leave_date: new Date(),
      content: null,
      applicant_id: users[0].id,
      is_actived: true,
      is_completed: false,
      level1_supervisor_id: users[1].id,
      level1_approved: true,
      level2_supervisor_id: users[2].id,
      level2_approved: null,
      reject_reason: null,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      leave_date: new Date(),
      content: null,
      applicant_id: users[0].id,
      is_actived: true,
      is_completed: true,
      level1_supervisor_id: users[1].id,
      level1_approved: true,
      level2_supervisor_id: users[2].id,
      level2_approved: true,
      reject_reason: null,
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM Users WHERE role = 'user';`, { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    await queryInterface.bulkInsert('Supervisors',
      Array.from({ length: 2 }, (_, i) => {
        return {
          supervisor_id: users[i + 1].id,
          subordinate_id: users[i].id,
          created_at: new Date(),
          updated_at: new Date()
        }
      }),
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Supervisors', null, {})
  }
}

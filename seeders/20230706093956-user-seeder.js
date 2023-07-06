'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const PASSWORD = '12345678'
    const roles = ['admin', 'user']
    // add an admin & 3 user accounts
    await queryInterface.bulkInsert(
      'Users',
      [{
        name: 'Admin',
        email: 'root@example.com',
        password: PASSWORD,
        registration: new Date(),
        remaining: 0,
        is_working: true,
        role: roles[0],
        is_admin: true,
        created_at: new Date(),
        updated_at: new Date()
      }, ...Array.from({ length: 3 }).map((_, i) => ({
        name: `user${i + 1}`,
        email: `user${i + 1}@example.com`,
        password: PASSWORD,
        registration: new Date(),
        remaining: 14,
        is_working: true,
        role: roles[1],
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date()
      }))], {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}

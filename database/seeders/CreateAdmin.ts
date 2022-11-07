import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'

export default class extends BaseSeeder {
  public async run() {
    await Admin.create({
      first_name: 'Super',
      last_name: 'Admin',
      email: 'admin@test.com',
      password: '123456'
    })
  }
}

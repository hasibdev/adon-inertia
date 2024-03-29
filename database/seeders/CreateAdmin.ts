import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'

export default class extends BaseSeeder {
  public async run() {
    const email = 'admin@test.com'
    await Admin.updateOrCreate({ email }, {
      first_name: 'Super',
      last_name: 'Admin',
      email,
      password: '123456'
    })
  }
}

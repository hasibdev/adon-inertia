import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CategoryFactory from 'Database/factories/CategoryFactory'

export default class extends BaseSeeder {
  public async run() {
    await CategoryFactory.createMany(150)
  }
}

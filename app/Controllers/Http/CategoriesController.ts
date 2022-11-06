import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { pagination } from 'App/helpers/utils'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ request, inertia }: HttpContextContract) {
    const { page, perPage } = pagination(request)

    const data = await Category.query().paginate(page, perPage)
    return inertia.render('Admin/Categories/Index', { data })
  }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}

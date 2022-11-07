import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { pagination } from 'App/helpers/utils'
import Product from 'App/Models/Product'
import { CreateProductValidator } from 'App/Validators/ProductValidator'

export default class ProductsController {
  public async index({ inertia, request }: HttpContextContract) {
    const { page, perPage } = pagination(request)

    const data = await Product.query().paginate(page, perPage)
    return inertia.render('Admin/Products/Index', { data })
  }

  public async create({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Products/Create')
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateProductValidator)

    await Product.create(payload)

    return response.status(303).redirect('/admin/products')
  }

  public async show({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Products/Show')
  }

  public async edit({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Products/Edit')
  }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}

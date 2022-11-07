import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { LoginValidator } from 'App/Validators/AdminAuthValidator'

export default class AuthController {
  public async view({ inertia }: HttpContextContract) {
    return inertia.render('Auth/AdminLogin')
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(LoginValidator)
    await auth.use('admin').attempt(payload.identifier, payload.password)

    return response.redirect('/admin')
  }
}

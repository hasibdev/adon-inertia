import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { LoginValidator } from 'App/Validators/AdminAuthValidator'

export default class AuthController {
  public async view({ inertia }: HttpContextContract) {
    return inertia.render('Auth/AdminLogin')
  }

  public async login({ auth, request, response }: HttpContextContract) {
    return { message: "Hello world!" }
    const payload = await request.validate(LoginValidator)
    await auth.use('admin').attempt(payload.identifier, payload.password)

    return response.redirect('/admin')
  }

  public async logout({ auth, inertia }: HttpContextContract) {
    await auth.logout()
    return inertia.render('Auth/AdminLogin')
  }

  public async showProfile({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Profile/Index')
  }
}

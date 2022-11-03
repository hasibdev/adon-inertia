import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async view({ inertia }: HttpContextContract) {
    return inertia.render('Auth/AdminLogin')
  }
  
  public async login({}: HttpContextContract) {
    return 'Admin Login'
  }
}

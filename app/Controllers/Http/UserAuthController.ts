import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserRegisterValidator } from 'App/Validators/UserValidator'

export default class AuthController {
  public async viewLogin({ inertia }: HttpContextContract) {
    return inertia.render('Auth/Login')
  }
  public async login({ response }: HttpContextContract) {
    console.log('login')
    return response.redirect().back()
  }


  public async viewRegister({ inertia }: HttpContextContract) {
    return inertia.render('Auth/Register')
  }

  public async register({ request, response }: HttpContextContract) {
    await request.validate(UserRegisterValidator)

    console.log(request.body())

    return response.redirect().back()
  }
}

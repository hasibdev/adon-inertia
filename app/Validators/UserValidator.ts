import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    name: schema.string({}, [ rules.alpha() ]),
    email: schema.string({}, [
             rules.email(),
             rules.unique({ table: 'users', column: 'email' }),
           ]),
    password: schema.string({}, [rules.minLength(6)])
  })

  public messages: CustomMessages = {}
}

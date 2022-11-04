import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export class UserRegisterValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    first_name: schema.string({ trim: true }, [ rules.alpha(), rules.maxLength(50) ]),
    last_name: schema.string({ trim: true }, [ rules.alpha(), rules.maxLength(50) ]),
    email: schema.string({ trim: true, }, [
             rules.email(),
             rules.unique({ table: 'users', column: 'email' }),
           ]),
    password: schema.string({}, [
      rules.minLength(6), 
      rules.maxLength(180),
      rules.confirmed('confirmed_password')
    ])
  })

  public messages = {...this.messages}
}

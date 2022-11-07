import { BaseCommand } from '@adonisjs/core/build/standalone'
import { validateEmail } from 'App/helpers/utils'
import Admin from 'App/Models/Admin'

export default class CreateAdmin extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'admin:create'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Create Super Admin'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    try {
      // first name
      const first_name = await this.prompt.ask('Enter first name', {
        validate(answer) {
          if (answer.length < 2) {
            return "Name must have to be at least 3 character"
          }
          return true
        },
      })
      // last name
      const last_name = await this.prompt.ask('Enter last name', {
        validate(answer) {
          if (answer.length < 2) {
            return "Name must have to be at least 3 character"
          }
          return true
        },
      })

      // Eamil
      const email = await this.prompt.ask('Enter email', {
        async validate(answer) {
          if (!validateEmail(answer)) {
            return "Email is not valid"
          }
          if (await Admin.findBy('email', answer)) {
            return "Email already exits!"
          }
          return true
        },
      })

      // Password
      const password = await this.prompt.secure('Choose account password', {
        validate(answer) {
          if (answer.length < 6) {
            return "Name must have to be at least 6 character"
          }
          return true
        },
      })

      // Confirmed Password
      await this.prompt.secure('Confirmed password', {
        validate(answer) {
          if (answer !== password) {
            return "Password dosen't match"
          }
          return true
        },
      })


      await Admin.create({ first_name, last_name, email, password })
      this.logger.success('Admin Created Successfully')
      process.exit(0)
    } catch (error) {
      this.logger.error(new Error('Request Fail'))
      process.exit(1)
    }
  }
}
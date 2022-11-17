"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
const utils_1 = global[Symbol.for('ioc.use')]("App/helpers/utils");
const Admin_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Admin"));
class CreateAdmin extends standalone_1.BaseCommand {
    async run() {
        try {
            const first_name = await this.prompt.ask('Enter first name', {
                validate(answer) {
                    if (answer.length < 2) {
                        return "Name must have to be at least 3 character";
                    }
                    return true;
                },
            });
            const last_name = await this.prompt.ask('Enter last name', {
                validate(answer) {
                    if (answer.length < 2) {
                        return "Name must have to be at least 3 character";
                    }
                    return true;
                },
            });
            const email = await this.prompt.ask('Enter email', {
                async validate(answer) {
                    if (!(0, utils_1.validateEmail)(answer)) {
                        return "Email is not valid";
                    }
                    if (await Admin_1.default.findBy('email', answer)) {
                        return "Email already exits!";
                    }
                    return true;
                },
            });
            const password = await this.prompt.secure('Choose account password', {
                validate(answer) {
                    if (answer.length < 6) {
                        return "Name must have to be at least 6 character";
                    }
                    return true;
                },
            });
            await this.prompt.secure('Confirmed password', {
                validate(answer) {
                    if (answer !== password) {
                        return "Password dosen't match";
                    }
                    return true;
                },
            });
            await Admin_1.default.create({ first_name, last_name, email, password });
            this.logger.success('Admin Created Successfully');
            process.exit(0);
        }
        catch (error) {
            this.logger.error(new Error('Request Fail'));
            process.exit(1);
        }
    }
}
exports.default = CreateAdmin;
CreateAdmin.commandName = 'admin:create';
CreateAdmin.description = 'Create Super Admin';
CreateAdmin.settings = {
    loadApp: true,
    stayAlive: false,
};
//# sourceMappingURL=createAdmin.js.map
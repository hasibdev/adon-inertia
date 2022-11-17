"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserValidator_1 = global[Symbol.for('ioc.use')]("App/Validators/UserValidator");
class AuthController {
    async viewLogin({ inertia }) {
        return inertia.render('Auth/Login');
    }
    async login({ response }) {
        console.log('login');
        return response.redirect().back();
    }
    async viewRegister({ inertia }) {
        return inertia.render('Auth/Register');
    }
    async register({ request, response }) {
        await request.validate(UserValidator_1.UserRegisterValidator);
        console.log(request.body());
        return response.redirect().back();
    }
}
exports.default = AuthController;
//# sourceMappingURL=UserAuthController.js.map
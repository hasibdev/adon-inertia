"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminAuthValidator_1 = global[Symbol.for('ioc.use')]("App/Validators/AdminAuthValidator");
class AuthController {
    async view({ inertia }) {
        return inertia.render('Auth/AdminLogin');
    }
    async login({ auth, request, response }) {
        const payload = await request.validate(AdminAuthValidator_1.LoginValidator);
        await auth.use('admin').attempt(payload.identifier, payload.password);
        return response.redirect('/admin');
    }
    async logout({ auth, inertia }) {
        await auth.logout();
        return inertia.render('Auth/AdminLogin');
    }
    async showProfile({ inertia }) {
        return inertia.render('Admin/Profile/Index');
    }
}
exports.default = AuthController;
//# sourceMappingURL=AdminAuthController.js.map
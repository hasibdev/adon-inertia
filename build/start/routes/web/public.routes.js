"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', ({ inertia }) => {
    return inertia.render('Home');
});
Route_1.default.get('/about', async ({ inertia }) => {
    return inertia.render('About');
});
Route_1.default.get('/login', 'UserAuthController.viewLogin');
Route_1.default.post('/login', 'UserAuthController.login');
Route_1.default.get('/register', 'UserAuthController.viewRegister');
Route_1.default.post('/register', 'UserAuthController.register');
//# sourceMappingURL=public.routes.js.map
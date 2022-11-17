"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Admin_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Admin"));
class default_1 extends Seeder_1.default {
    async run() {
        await Admin_1.default.create({
            first_name: 'Super',
            last_name: 'Admin',
            email: 'admin@test.com',
            password: '123456'
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=CreateAdmin.js.map
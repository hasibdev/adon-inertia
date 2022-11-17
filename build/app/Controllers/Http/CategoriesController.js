"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = global[Symbol.for('ioc.use')]("App/helpers/utils");
const Category_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Category"));
const CategoryValidator_1 = global[Symbol.for('ioc.use')]("App/Validators/CategoryValidator");
class CategoriesController {
    async index({ request, inertia }) {
        const { page, perPage } = (0, utils_1.pagination)(request);
        const data = await Category_1.default.query().paginate(page, perPage);
        return inertia.render('Admin/Categories/Index', { data });
    }
    async create({}) { }
    async store({ request, response }) {
        const payload = await request.validate(CategoryValidator_1.CreateCategoryValidator);
        await Category_1.default.create(payload);
        return response.status(303).redirect('/admin/categories');
    }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = CategoriesController;
//# sourceMappingURL=CategoriesController.js.map
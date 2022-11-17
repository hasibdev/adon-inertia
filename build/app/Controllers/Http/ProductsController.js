"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = global[Symbol.for('ioc.use')]("App/helpers/utils");
const Product_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Product"));
const ProductValidator_1 = global[Symbol.for('ioc.use')]("App/Validators/ProductValidator");
class ProductsController {
    async index({ inertia, request }) {
        const { page, perPage } = (0, utils_1.pagination)(request);
        const data = await Product_1.default.query().paginate(page, perPage);
        return inertia.render('Admin/Products/Index', { data });
    }
    async create({ inertia }) {
        return inertia.render('Admin/Products/Create');
    }
    async store({ request, response }) {
        const payload = await request.validate(ProductValidator_1.CreateProductValidator);
        await Product_1.default.create(payload);
        return response.status(303).redirect('/admin/products');
    }
    async show({ inertia }) {
        return inertia.render('Admin/Products/Show');
    }
    async edit({ inertia }) {
        return inertia.render('Admin/Products/Edit');
    }
    async update({}) { }
    async destroy({}) { }
}
exports.default = ProductsController;
//# sourceMappingURL=ProductsController.js.map
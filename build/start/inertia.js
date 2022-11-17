"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Inertia_1 = __importDefault(global[Symbol.for('ioc.use')]("EidelLev/Inertia"));
Inertia_1.default.share({
    errors: (ctx) => ctx.session.flashMessages.get('errors'),
    params: (ctx) => ctx.request.params(),
    query: (ctx) => ctx.request.qs(),
    isAuthenticated: (ctx) => ctx.auth.isAuthenticated,
    defaultGuard: (ctx) => ctx.auth.defaultGuard,
    user: (ctx) => ctx.auth.user,
}).version(() => Inertia_1.default.manifestFile('public/assets/manifest.json'));
//# sourceMappingURL=inertia.js.map
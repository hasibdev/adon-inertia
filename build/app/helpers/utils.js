"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.pagination = void 0;
const pagination = (request) => {
    const page = request.input('page', 1);
    const perPage = request.input('perPage', 25);
    return { page, perPage };
};
exports.pagination = pagination;
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
exports.validateEmail = validateEmail;
//# sourceMappingURL=utils.js.map
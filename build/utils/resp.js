"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respM = exports.resp = void 0;
const resp = (s, m) => {
    return {
        status: s,
        message: m,
    };
};
exports.resp = resp;
const respM = (s, m) => {
    return {
        status: s,
        message: { message: m },
    };
};
exports.respM = respM;

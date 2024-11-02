"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const isomorphic_unfetch_1 = require("isomorphic-unfetch");
class Base {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
    }
    Request(endpoint, options) {
        const url = `${this.baseUrl}/${endpoint}`;
        const headers = Object.assign({ "Content-Type": "application/json" }, (this.apiKey && { "x-api-key": this.apiKey }));
        const config = Object.assign(Object.assign({}, options), { headers });
        return (0, isomorphic_unfetch_1.default)(url, config).then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        });
    }
}
exports.Base = Base;

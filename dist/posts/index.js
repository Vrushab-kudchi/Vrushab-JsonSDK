"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
class Posts extends base_1.Base {
    async getPostById(id) {
        return this.Request(`/posts/${id}`);
    }
    async getPosts() {
        return this.Request("/posts");
    }
    async createPost(newPost) {
        return this.Request("/posts", {
            method: "POST",
            body: JSON.stringify(newPost),
        });
    }
}
exports.default = Posts;

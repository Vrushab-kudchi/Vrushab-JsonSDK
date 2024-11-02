import { Base } from "../base";
import { NewPost, Post } from "./type";
declare class Posts extends Base {
    getPostById(id: number): Promise<Post>;
    getPosts(): Promise<Post[]>;
    createPost(newPost: NewPost): Promise<Post>;
}
export default Posts;

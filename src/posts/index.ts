import { Base } from "../base";
import { NewPost, Post } from "./type";

class Posts extends Base {
  async getPostById(id: number): Promise<Post> {
    return this.Request<Post>(`/posts/${id}`);
  }

  async getPosts(): Promise<Post[]> {
    return this.Request<Post[]>("/posts");
  }

  async createPost(newPost: NewPost): Promise<Post> {
    return this.Request<Post>("/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
    });
  }
    
}

export default Posts;

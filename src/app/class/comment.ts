import { Post } from "./post";
import { User } from "./user";

export class Comment {

    public id: number;
    public body: string;
    public createdDate: Date;
    public post: Post
    public user: User


}

import { Post } from "./post";

export class User {

    public id: number;
    public email: string;
    public password: string;
    public username: string;
    public firstname: string;
    public lastname: string
    public posts: Post[]
}

import { User } from "./user";

export class Post {
 
    public id:number;
    public title:string ;
    public body:string ;
    public createdDate :Date;
    public user :User;
    public comments :Comment[]

}

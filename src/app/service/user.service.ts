import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient
    ) { }

baseUrl="http://localhost:8080/user/";

getAllUser():Observable<User[]>
{
return this.http.get<User[]>(this.baseUrl);
}

getUserById(id:number):Observable<User>
{
return this.http.get<User>(this.baseUrl+id);
}

saveUser(user:any):Observable<User>
{
  return this.http.post<User>(this.baseUrl,user);
}

deleteUser(id:number)
{
  return this.http.delete<User>(this.baseUrl+id);
}

updateUser(user:User):Observable<User>
{
  return this.http.put<User>(this.baseUrl+user.id,user);
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http :HttpClient) { }

baseUrl="http://localhost:8080/employees/";

getAllEmployee():Observable<Employee[]>
{
return this.http.get<Employee[]>(this.baseUrl);
}

getEmployeeById(id:number):Observable<Employee>
{
return this.http.get<Employee>(this.baseUrl+id);
}

saveEmployee(employee:any):Observable<Employee>
{
  return this.http.post<Employee>(this.baseUrl,employee);
}

deleteEmployee(id:number)
{
  return this.http.delete<Employee>(this.baseUrl+id);
}

updateEmployee(employee:Employee):Observable<Employee>
{
  return this.http.put<Employee>(this.baseUrl+employee.id,employee);
}



}

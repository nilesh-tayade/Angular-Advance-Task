import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../class/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8080/student/";


getAllStudent():Observable<Student[]>
  {
  return this.http.get<Student[]>(this.baseUrl);
  }

  getStudentById(id:number):Observable<Student>
  {
  return this.http.get<Student>(this.baseUrl+id);
  }

  saveStudent(student:Student):Observable<Student>
  {
  return this.http.post<Student>(this.baseUrl,student);
  }

  updateStudent(student:Student):Observable<Student>
  {
  return this.http.put<Student>(this.baseUrl+student.id,student);
  }

  deleteStudentById(id:number)
  {
  return this.http.delete(this.baseUrl+id);
  }

}

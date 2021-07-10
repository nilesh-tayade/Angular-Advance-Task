import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/class/student';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[];
  p: number = 1;

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }


deleteStudent(id:number)
{
  this.studentService.deleteStudentById(id).subscribe(data=>{
    console.log(data);
    Swal.fire('Success...', 'Employee Deleted Successfully!', 'success');
    this.getAllStudent();
  },error=>{
    console.log(error);
    Swal.fire('error...', 'Something Went Wrong!', 'error');
  })
}

  getAllStudent()
  {
    this.studentService.getAllStudent().subscribe(data=>{
      this.students=data
      console.log(data);
      
    })
  }

  delete(id:number)
  {
this.deleteStudent(id);
  }

}

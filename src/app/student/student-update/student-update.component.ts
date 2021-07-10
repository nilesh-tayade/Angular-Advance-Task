import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mobile } from 'src/app/class/mobile';
import { Student } from 'src/app/class/student';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  studentForm: FormGroup;
id:number;
student:Student
  constructor(private fb: FormBuilder,private studentService:StudentService,private routes:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.routes.snapshot.params.id;
    this.getStudentById();
    this.createStudentForm()

  }

getStudentById()
{
  this.studentService.getStudentById(this.id).subscribe(data=>{
    this.student=data;
    console.log(data);
    this.setData();
    
  })
}

  createStudentForm() {
    this.studentForm = this.fb.group({
      id:[''],
      firstname: [''],
      lastname: [''],
      city: [''],

      mobiles: this.fb.array([
      ])
    })
  }

saveStudent()
{
  this.studentService.updateStudent(this.studentForm.value).subscribe(data=>{
    console.log(data); 
    Swal.fire('Success...', 'Student  Updated Successfully!', 'success')
this.router.navigate(['/student/student-list'])
  })
}

setData()
{
  this.studentForm.get('id').setValue(this.student.id);
  this.studentForm.get('firstname').setValue(this.student.firstname);
  this.studentForm.get('lastname').setValue(this.student.lastname);
  this.studentForm.get('city').setValue(this.student.city);

 for(let mobile of this.student.mobiles)
 {
    (<FormArray>this.studentForm.get('mobiles')).push(this.setMobile(mobile));
 }

}


  initMobile() {
    return this.fb.group({
      mobileNo: ['']
    })

  }

setMobile(mobile:Mobile)
{
  return this.fb.group({
    id:[mobile.id],
    mobileNo: [mobile.mobileNo]
  })
}

  onSubmit() {
    console.log(this.studentForm.value);
this.saveStudent();
  }

  addContactNo() {
    (<FormArray>this.studentForm.get('mobiles')).push(this.initMobile());
  }





}

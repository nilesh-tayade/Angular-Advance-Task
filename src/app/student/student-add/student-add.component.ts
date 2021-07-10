import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder,private studentService:StudentService) { }

  ngOnInit(): void {
    this.createStudentForm()
  }

  createStudentForm() {
    this.studentForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      city: [''],

      mobiles: this.fb.array([
        this.initMobile()
      ])
    })
  }

saveStudent()
{
  this.studentService.saveStudent(this.studentForm.value).subscribe(data=>{
    console.log(data);
    Swal.fire('Success...', 'Student added  Successfully!', 'success');
 this.reset();
  },error=>{
    console.log(error);
    Swal.fire('error...', 'Something Went Wrong!', 'error');
  })
}


  initMobile() {
    return this.fb.group({
      mobileNo: ['']
    })

  }


  onSubmit() {
    console.log(this.studentForm.value);
this.saveStudent();
  }

  addContactNo() {
    (<FormArray>this.studentForm.get('mobiles')).push(this.initMobile());
  }


  reset() {
    this.studentForm.reset();
  }
}

import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  EmployeeForm:FormGroup
  constructor(private fb :FormBuilder,private employeeService :EmployeeService) { }
employee:Employee;
  ngOnInit(): void {
    this.createEmployeeForm();
  }

createEmployeeForm()
{
this.EmployeeForm =this.fb.group({
id:['',Validators.required],
firstname:['',Validators.required],
lastname:['',Validators.required],
email:['',Validators.required],
username:['',Validators.required],

password:['',Validators.required],
imageUrl:['',Validators.required],
address:this.fb.group({
  city:['',Validators.required],
  zipcode:['',Validators.required],
  state:['',Validators.required],
  country:['',Validators.required],

})
})


}


  onSubmit()
{
  console.log(this.EmployeeForm.value);
  this.saveEmployee();
}

reset()
{
  this.resetForm();
}
resetForm()
{
  this.EmployeeForm.reset();
}


saveEmployee()
{
  this.employeeService.saveEmployee(this.EmployeeForm.value).subscribe(data=>
    {
      console.log(data);
      this.resetForm();
      Swal.fire('Success...', 'Employee Registerd Successfully!', 'success')
    },error=>{
      console.log(error);
      Swal.fire('Oops...', 'Something went wrong!', 'error')

    })
}

}

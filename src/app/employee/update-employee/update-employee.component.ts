import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  EmployeeForm:FormGroup
  constructor(private fb :FormBuilder,private employeeService :EmployeeService,private route:ActivatedRoute,private router:Router) { }

employee:Employee;
id:number;
  ngOnInit(): void {
this.id=this.route.snapshot.params.id
console.log(this.id);

    this.createEmployeeForm();
    this.getEmployeeById();
  }

getEmployeeById()
{
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    console.log(data);
   this.employee=data;
   this.setData();
  })
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


setData()
{
this.EmployeeForm.get('id').setValue(this.employee.id);
this.EmployeeForm.get('firstname').setValue(this.employee.firstname);
this.EmployeeForm.get('lastname').setValue(this.employee.lastname);
this.EmployeeForm.get('email').setValue(this.employee.email);
this.EmployeeForm.get('username').setValue(this.employee.username);
this.EmployeeForm.get('imageUrl').setValue(this.employee.imageUrl);
this.EmployeeForm.get('password').setValue(this.employee.password);
this.EmployeeForm.get('address').get('city').setValue(this.employee.address.city);
this.EmployeeForm.get('address').get('zipcode').setValue(this.employee.address.zipcode);
this.EmployeeForm.get('address').get('state').setValue(this.employee.address.state);
this.EmployeeForm.get('address').get('country').setValue(this.employee.address.country);



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
  this.employeeService.updateEmployee(this.EmployeeForm.value).subscribe(data=>
    {
      console.log(data);
      this.resetForm();
      Swal.fire('Success...', 'Employee Updated Successfully!', 'success')
      this.router.navigate(['/employee/employee-list'])
    },error=>{
      console.log(error);
      Swal.fire('Oops...', 'Something went wrong!', 'error')

    })
}

}

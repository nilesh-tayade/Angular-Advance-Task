import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

userForm:FormGroup

  constructor(private fb:FormBuilder,private userService :UserService) { }

  ngOnInit(): void {
    this.createUserForm();
  }

createUserForm()
{
  this.userForm=this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required]

  })
}

onSubmit()
{
console.log(this.userForm.value);
this.saveUser();
}

saveUser()
{
  this.userService.saveUser(this.userForm.value).subscribe(data=>{
    console.log(data);
    Swal.fire('Success...', 'User Registerd Successfully!', 'success');
  },error=>{
    console.log(error);
    Swal.fire('Error...', 'Something Went Wrong!', 'error');
  })

  this.userForm.reset();

}

reset()
{
  this.userForm.reset();
}

}

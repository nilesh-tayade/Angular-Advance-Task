import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facebook-user-list',
  templateUrl: './facebook-user-list.component.html',
  styleUrls: ['./facebook-user-list.component.css']
})
export class FacebookUserListComponent implements OnInit {
p:number=1
  users:User[]
  constructor(private userservice :UserService) { }


  getAllUser( )
  {
    this.userservice.getAllUser().subscribe(data=>{
      this.users=data;
      console.log(data);
      
    })
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  delete(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete this User!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'delete',
      cancelButtonText: 'cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser(id);
       
     this.getAllUser();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Data is Safe :)',
          'error'
        )
      }
    })
  
  }

deleteUser(id:number)
{
  this.userservice.deleteUser(id).subscribe(data=>{
    console.log(data);
    Swal.fire('Success...', 'User deleted Successfully!', 'success');
  },error=>{
    console.log(error);
    Swal.fire('Error...', 'Something Went Wrong!', 'error');

  })
}


}

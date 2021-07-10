import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private emploeeService:EmployeeService) { }

employees:Employee[]
p: number = 1;

  ngOnInit(): void {
    this.getAllEmployee()
  }

getAllEmployee()
{
  this.emploeeService.getAllEmployee().subscribe(data=>{
    console.log(data);
    this.employees=data
  })
}

delete(id:number)
{
  Swal.fire({
    title: 'Are you sure?',
    text: 'You Want to delete this Data!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'delete',
    cancelButtonText: 'cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.deleteEmployee(id);
     
   
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your Data is Safe :)',
        'error'
      )
    }
  })

}


deleteEmployee(id:number)
{
  this.emploeeService.deleteEmployee(id).subscribe(data=>{
    console.log(data);

    this.getAllEmployee();
    Swal.fire('Success...', 'Employee deleted  Successfully!', 'success')
  },error=>{
    console.log(error);
    Swal.fire('Error...', 'Something Went Wrong!', 'error');
  })
}


}

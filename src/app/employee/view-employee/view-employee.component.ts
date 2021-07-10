import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private employeeService :EmployeeService,private route:ActivatedRoute) { }

employee:Employee;
id:number;
  ngOnInit(): void {
this.id=this.route.snapshot.params.id
console.log(this.id);

    this.getEmployeeById();
  }

getEmployeeById()
{
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    console.log(data);
   this.employee=data;
  })
}

}

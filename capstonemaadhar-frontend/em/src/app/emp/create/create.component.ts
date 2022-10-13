import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  empForm: Emp = {
    id: 0,
    name: '',
    email: '',
  };
 
  constructor(private EmpService:EmpService,private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.EmpService.create(this.empForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/emp/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
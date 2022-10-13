import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  uForm: User = {
    id: 0,
    name: '',
    dob: '',
    address:'',
    emailid:'',
    mobileno:'',
    gender: ''
  };
 
  constructor(private UserService:UserService,private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.UserService.create(this.uForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/login"])
      },
      error:(err) => {
        console.log(err);
      }
    })
    alert("Citizen Registered Successfully");
  }
}
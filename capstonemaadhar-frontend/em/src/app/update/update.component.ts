import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  uForm: User = {
    id: 0,
    name: '',
    dob: '',
    address:'',
    emailid:'',
    mobileno:'',
    gender: ''
  };
 
  constructor(private route: ActivatedRoute,private router:Router,private UserService: UserService) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.UserService.getById(id).subscribe((data) => {
      this.uForm = data;
    });
  }
 
  update() {
    this.UserService.update(this.uForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
    alert("Login Credentials Updated");
  }
}
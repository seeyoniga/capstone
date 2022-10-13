import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService} from 'src/app/user.service'
 
declare var window: any;
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  allUsers: User[] = [];
 
  constructor(private UserService: UserService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.UserService.get().subscribe((data) => {
      this.allUsers = data;
    });
  }
}
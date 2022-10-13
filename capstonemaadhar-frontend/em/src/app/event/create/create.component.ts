import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/event';
import { EventService } from 'src/app/event.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  evtForm: Event = {
    id: 0,
    name: '',
    dob: '',
    address:'',
    emailid:'',
    mobileno:'',
    gender: '',
    aid: '',
    cid: '',
    pid: '',
    issuedate: ''

  };
 
  constructor(private EventService:EventService,private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.EventService.create(this.evtForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/adminhome"])
      },
      error:(err) => {
        console.log(err);
      }
    })
    alert("Aadhar Issued");
  }
}
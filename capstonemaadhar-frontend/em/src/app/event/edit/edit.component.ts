import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/event';
import { EventService } from 'src/app/event.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
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
  }
  constructor(private route: ActivatedRoute,private router:Router,private EventService: EventService) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.EventService.getById(id).subscribe((data) => {
      this.evtForm = data;
    });
  }
 
  update() {
    this.EventService.update(this.evtForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
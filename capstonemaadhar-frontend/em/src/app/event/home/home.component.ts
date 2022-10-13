import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event';
import { EventService } from 'src/app/event.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allEvents: Event[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private EventService: EventService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.EventService.get().subscribe((data) => {
      this.allEvents = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.EventService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allEvents = this.allEvents.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
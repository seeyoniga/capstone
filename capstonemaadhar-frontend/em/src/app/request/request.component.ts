import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';

declare var window: any;

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  allRequests: Request[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private RequestService: RequestService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.RequestService.get().subscribe((data) => {
      this.allRequests = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.RequestService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allRequests = this.allRequests.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
 

 


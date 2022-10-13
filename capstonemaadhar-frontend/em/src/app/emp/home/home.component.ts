import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allEmployees: Emp[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private EmpService: EmpService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.EmpService.get().subscribe((data) => {
      this.allEmployees = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.EmpService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allEmployees = this.allEmployees.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  empForm: Emp = {
    id: 0,
    name: '',
    email: '',
  };
  constructor(private route: ActivatedRoute,private router:Router,private EmpService: EmpService) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.EmpService.getById(id).subscribe((data) => {
      this.empForm = data;
    });
  }
 
  update() {
    this.EmpService.update(this.empForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/emp/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
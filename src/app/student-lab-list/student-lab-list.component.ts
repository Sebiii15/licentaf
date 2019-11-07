import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-lab-list',
  templateUrl: './student-lab-list.component.html',
  styleUrls: ['./student-lab-list.component.css']
})
export class StudentLabListComponent implements OnInit,OnDestroy {
  panelOpenState = false;
  labs: any ;

  constructor(private service: StudentService,
              private router: Router,
              private route: ActivatedRoute) {

                this.labs = service.getAll();
  }

  edit(id:any){
    this.router.navigate(['/list/edit', id]);    
  }

  ngOnInit() {
  
  }

  ngOnDestroy() {
  }

}

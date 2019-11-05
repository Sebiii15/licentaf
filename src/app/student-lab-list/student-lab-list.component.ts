import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-lab-list',
  templateUrl: './student-lab-list.component.html',
  styleUrls: ['./student-lab-list.component.css']
})
export class StudentLabListComponent implements OnInit,OnDestroy {
  panelOpenState = false;
  labs: any = [{name:"PCLP", description:"Programarea calculatoarelor si limbaje de programare", labs:"12", homeworks:"2"}
              ,{name:"BD", description:"Baze de date", labs:"12", homeworks:"4"}]

  constructor(
              private router: Router,
              private route: ActivatedRoute) {
  }

  edit(row:any){
    this.router.navigate(['/list/edit']);    
  }

  ngOnInit() {
  
  }

  ngOnDestroy() {
  }

}

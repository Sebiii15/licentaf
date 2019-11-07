import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '@app/student-lab-list/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-lab-list-edit',
  templateUrl: './subject-lab-list-edit.component.html',
  styleUrls: ['./subject-lab-list-edit.component.css']
})
export class SubjectLabListEditComponent implements OnInit {


  form:FormGroup;
  currentLab: any;
  id: any;
  service:StudentService;
  
  constructor(service: StudentService,
              route: ActivatedRoute) {
   this.service = service;
   this.id  = route.snapshot.paramMap.get("id");
   
   this.currentLab = this.service.getById(this.id);
   console.log(this.id)
   console.log(this.currentLab)
   }

  ngOnInit() {
  
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup(
      { 'id': new FormControl(this.currentLab[0].id),
        'name': new FormControl(this.currentLab[0].name),
        'description': new FormControl(this.currentLab[0].description),
        'labs': new FormControl(this.currentLab[0].labs),
        'homeworks': new FormControl(this.currentLab[0].homeworks)
      });
      this.form.disable();
  }
}

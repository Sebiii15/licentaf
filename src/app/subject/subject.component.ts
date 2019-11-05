import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Group } from '@app/groups/groups.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  groups: Group[] = [{id:"1234",name:"4351",year:"1"},{id:"1234",name:"4352",year:"2"}];
  groupOptions: Group[] = [{id:"1234",name:"4351",year:"1"},{id:"1234",name:"4352",year:"2"}];
  yearOptions: string[] = ['1', '2','3','4'];

  itemsList: any[] = [{title:"Titlu1",description:"descriere"},{title:"Titlu2",description:"descriere"}]

  panelOpenState = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      abreviation: ['', Validators.required],
      year: ['', Validators.required],
      group: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  filterGroups(option:string){
    this.groupOptions = this.groups.filter(g => g.year == option);
  }

  addNewItem(){
    this.itemsList.push({title:"Titlu1",description:"descriere"})
  }

}

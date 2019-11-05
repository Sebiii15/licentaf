import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-lab-item',
  templateUrl: './student-lab-item.component.html',
  styleUrls: ['./student-lab-item.component.css']
})
export class StudentLabItemComponent implements OnInit {
  
  @Input() recipe: {name:string,description:string};
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

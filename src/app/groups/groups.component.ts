import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor() { }

  itemsList:{ id: number, name: string, country:string,city:string,salary:string }[]= [
          {id:1,
           name: "Sebi",
           country: "Sustache",
           city: "OT",
           salary: "1.000.000.000"},
           {id:2,
            name: "Sebi",
            country: "Sustache",
            city: "OT",
            salary: "1.000.000.000"}]

  ngOnInit() {
  }

}

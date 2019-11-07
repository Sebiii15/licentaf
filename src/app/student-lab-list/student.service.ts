import { Injectable } from "@angular/core";

@Injectable()
export class StudentService{

    labs: any = [{id:"123",name:"PCLP", description:"Programarea calculatoarelor si limbaje de programare", labs:"12", homeworks:"2"}
    ,{id:"124", name:"BD", description:"Baze de date", labs:"12", homeworks:"4"}]

    constructor(){

    }

    getAll(){
        return this.labs;
    }

    getById(id:string){
        return this.labs.filter(lab => lab.id == id)
    }


}
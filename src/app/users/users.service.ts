import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { User } from "@app/_models";

@Injectable()
export class UserService{
    private readonly API_URL = 'http://localhost:8080/users';

    dialogData: any;

    constructor(private httpClient: HttpClient) { }

    userChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

    get data(): User[] {
      return this.userChange.value;
    }

    getDialogData() {
      return this.dialogData;
    }
   
    getAllUsers(): void {

    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.get<User[]>(this.API_URL, { headers: header }).subscribe(data => {
      this.userChange.next(data)
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  
  updateUser(user: User) {
   
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(this.API_URL, user, { headers: header });
  }

  deleteDepartment(id: string): void {
     
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.delete(this.API_URL + '/' + id, { headers: header }).subscribe(data => {
    },
      (err: HttpErrorResponse) => {
        console.log(err.name + ' ' + err.message);
      }
    );
  }

    addUser(user: any) {
        console.log(user)
        const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    
        return this.httpClient.post(this.API_URL, user, { headers: header }).subscribe(data => {
         console.log("succes")
          },
            (error: HttpErrorResponse) => {
              console.log(error.name + ' ' + error.message);
            });
      }
}
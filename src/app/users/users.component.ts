import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { UserService } from './users.service';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { User } from '@app/_models';
import { BehaviorSubject, Observable, merge, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEditDialogComponent } from './users-edit.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  form: FormGroup;
  index: number;
  id: string;
  exampleDatabase: UserService | null;
  dataSource: UsersDataSource | null;
  displayedColumns: string[] = ['id', 'username', 'password', 'email', 'role', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(public userService: UserService,
    public dialog: MatDialog,
    public httpClient: HttpClient) {
    this.initForm();
  }

  refresh() {
    this.loadData();
  }

  ngOnInit() {

    this.loadData();
  }


  public loadData() {
    this.exampleDatabase = new UserService(this.httpClient);
    this.dataSource = new UsersDataSource(this.exampleDatabase, this.paginator, this.sort);

    fromEvent(this.filter.nativeElement, 'keyup')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });


  }

  startEdit(i: number, id: string, username: string, password: string, email: string, role: string) {
    this.id = id;
    this.index = i;
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      data: { id: id, username: username, password: password, email: email, role:role }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === 1) {
        const foundIndex = this.exampleDatabase.userChange.value.findIndex(x => x.id === this.id);
  
        setTimeout(() => { this.refreshTable(); }, 100);
     
      }
    });

    this.exampleDatabase.getAllUsers();
  }

  deleteUser(index:number, id:string){
    this.userService.deleteDepartment(id);
    
    const foundIndex = this.exampleDatabase.userChange.value.findIndex(x => x.id === this.id);

    this.exampleDatabase.userChange.value.splice(foundIndex, 1);

    setTimeout(() => { this.refreshTable(); }, 100);
  }

  
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }



  private initForm() {

    let name = '';
    let password = '';
    let email = '';
    let role = '';

    const users = new FormArray([], [Validators.required]);

    this.form = new FormGroup(
      {
        'username': new FormControl(name, [Validators.required]),
        'password': new FormControl(password, [Validators.required]),
        'email': new FormControl(email, [Validators.required]),
        'role': new FormControl(role, [Validators.required])
      });

  }

  onSubmit() {
    console.log("aici")
    this.userService.addUser(this.form.value);
    this.resetForm();
    setTimeout(() => { this.refreshTable(); }, 200);
  }

  private resetForm() {
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
  
    let name = '';
    let password = '';
    let email = '';
    let role = '';

    this.form = new FormGroup(
      {
        'username': new FormControl(name, [Validators.required]),
        'password': new FormControl(password, [Validators.required]),
        'email': new FormControl(email, [Validators.required]),
        'role': new FormControl(role, [Validators.required])
      });

   
      
      this.form.reset();
      this.form.updateValueAndValidity();
  }


}

export class UsersDataSource extends DataSource<User> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: User[] = [];
  renderedData: User[] = [];

  constructor(public _exampleDatabase: UserService,
    public _paginator: MatPaginator,
    public _sort: MatSort) {
    super();

    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  connect(): Observable<User[]> {
    const displayDataChanges = [
      this._exampleDatabase.userChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllUsers();


    return merge(...displayDataChanges).pipe(map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((department: User) => {
        const searchStr = (department.id + department.username + department.password).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    }
    ));
  }

  disconnect() { }


  /** Returns a sorted copy of the database data. */
  sortData(data: User[]): User[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'name': [propertyA, propertyB] = [a.username, b.username]; break;
        case 'fullName': [propertyA, propertyB] = [a.password, b.password]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}


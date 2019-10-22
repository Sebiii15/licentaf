import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './material.module';;
import { ProfessorLoginComponent } from './professor-login/professor-login.component'
;
import { StudentLoginComponent } from './student-login/student-login.component'
;
import { StudentsComponent } from './students/students.component'
;
import { UsersComponent } from './users/users.component'
import { UserService } from './users/users.service';
import { UserEditDialogComponent } from './users/users-edit.component';
import { GroupsComponent } from './groups/groups.component';
;
import { GroupsAddComponent } from './groups-add/groups-add.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        MaterialModule,
        BrowserAnimationsModule       
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent ,
        ProfessorLoginComponent ,
        StudentLoginComponent ,
        StudentsComponent,
        UsersComponent,
        UserEditDialogComponent,
        GroupsComponent,
        GroupsAddComponent],
        
       
    providers: [
  
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        UserService

        // provider used to create fake backe
    ],
    entryComponents:[UserEditDialogComponent],
    
    bootstrap: [AppComponent]
})

export class AppModule { }
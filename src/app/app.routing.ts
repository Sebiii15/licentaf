import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { AuthGuard } from './_guards/auth.guard';
import { StudentAuthGuard } from './_guards/student-auth.guard';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ProfessorAuthGuard } from './_guards/professor-auth.guard';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectLabListEditComponent } from './subject-lab-list-edit/subject-lab-list-edit.component';
import { StudentLabListComponent } from './student-lab-list/student-lab-list.component';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard],children:[
    //     { path: '', component: UsersComponent },
    //     { path: 'groups', component: GroupsComponent }
    // ] },
    // { path: 'professor', component: ProfessorLoginComponent, canActivate: [ProfessorAuthGuard] },
    // { path: 'student', component: StudentLoginComponent, canActivate: [StudentAuthGuard] },
    // { path: 'login', component: LoginComponent },
    // { path: 'subject', component: SubjectComponent},
    // { path: 'list/edit', component: SubjectLabListEditComponent},
     { path: '', component: StudentLabListComponent},
     { path: 'list/edit/:id', component: SubjectLabListEditComponent},
    // otherwise redirect to home
    // { path: '**', redirectTo: '' },
    // { path: 'dashboard',      component: UsersComponent },
    // { path: 'user-profile',   component: UsersComponent },
    // { path: 'table-list',     component: UsersComponent },
    // { path: 'typography',     component: UsersComponent },
    // { path: 'icons',          component: UsersComponent },
    // { path: 'maps',           component: UsersComponent },
    // { path: 'notifications',  component: UsersComponent },
    // { path: 'upgrade',        component: UsersComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
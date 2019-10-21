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

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard],children:[
        { path: '', component: UsersComponent },
        { path: 'groups', component: GroupsComponent }
    ] },
    { path: 'professor', component: ProfessorLoginComponent, canActivate: [ProfessorAuthGuard] },
    { path: 'student', component: StudentLoginComponent, canActivate: [StudentAuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserComponent } from './userhome/user/user.component';
import { EditComponent } from './event/edit/edit.component';
import { HomeComponent } from './event/home/home.component';
import { CreateComponent } from './event/create/create.component';
import { UpdateComponent } from './update/update.component';
import { RequestComponent } from './request/request.component';
const routes: Routes = [
  
  {path: '',redirectTo: 'emp/home',pathMatch: 'full'},
  {path: 'signup',component: SignupComponent},
  {path: 'login',component: LoginComponent},
  {path: 'logout',component: LogoutComponent},
  {path: 'homepage',component: HomepageComponent},
  {path: 'adminhome',component: AdminhomeComponent},
  {path: 'userhome',component: UserhomeComponent},
  {path: 'user',component: UserComponent},
  {path: 'home',component: HomeComponent},
  {path: 'edit/:id',component: EditComponent},
  {path: 'create',component: CreateComponent},
  {path: 'update',component: UpdateComponent},
  {path: 'request',component: RequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

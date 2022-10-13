import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmpModule } from './emp/emp.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserComponent } from './userhome/user/user.component';
import { EventComponent } from './event/event.component';
import { EditComponent } from './event/edit/edit.component';
import { HomeComponent } from './event/home/home.component';
import { CreateComponent } from './event/create/create.component';
import { UpdateComponent } from './update/update.component';
import { RequestComponent } from './request/request.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    HomepageComponent,
    AdminhomeComponent,
    UserhomeComponent,
    UserComponent,
    EventComponent,
    EditComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

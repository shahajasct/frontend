import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbComponent } from './db/db.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LeaveappComponent } from './leaveapp/leaveapp.component';
import { LiveComponent } from './live/live.component';
import { LoginComponent } from './login/login.component';
import { NotiComponent } from './noti/noti.component';

const routes: Routes = [
  {path:'login',redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  // {path:'header',component:HeaderComponent},
  {path:'db',component:DbComponent},
  {path:'live',component:LiveComponent},
  {path:'noti',component:NotiComponent},
  {path:'leavapp',component:LeaveappComponent},
  { path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

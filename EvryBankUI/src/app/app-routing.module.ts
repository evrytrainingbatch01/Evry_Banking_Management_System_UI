import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"Login", component:LoginComponent},
  {path:"Welcome", component:WelcomeComponent},
  {path:"",redirectTo:"Welcome",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[WelcomeComponent,LoginComponent];  
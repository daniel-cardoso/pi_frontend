import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCadComponent } from './login-cad/login-cad.component';

const routes: Routes = [
  { path: 'login-cad', component: LoginCadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

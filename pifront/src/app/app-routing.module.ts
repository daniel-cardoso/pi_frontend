import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { ContatoComponent } from './contato/contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path: 'home', component: HomeComponent}
  {path:'contato', component: ContatoComponent},
  {path:'destaques', component: DestaquesComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

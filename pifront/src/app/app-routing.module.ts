import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { ContatoComponent } from './contato/contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { FeedComponent } from './feed/feed.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path:'contato', component: ContatoComponent},
  {path:'destaques', component: DestaquesComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'cadastro-tema', component: PostTemaComponent},
  {path:'feed', component: FeedComponent},
  {path:'sobre-nos', component: SobreNosComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

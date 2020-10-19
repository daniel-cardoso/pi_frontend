import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { NgxMaskModule} from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedComponent } from './feed/feed.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DestaquesComponent } from './destaques/destaques.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { AlertasComponent } from './alertas/alertas.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { CasaComponent } from './casa/casa.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { FeedPageComponent } from './views/feed-page/feed-page.component';
import { FloatBtnComponent } from './componentes/float-btn/float-btn.component';
import { DropdownTemasComponent } from './componentes/dropdown-temas/dropdown-temas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogFeedPageComponent } from './views/feed-page/dialog-feed-page/dialog-feed-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    FooterComponent,
    DestaquesComponent,
    ContatoComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    SidebarComponent,
    PostTemaComponent,
    SobreNosComponent,
    PutPostagemComponent,
    AlertasComponent,
    DeletePostagemComponent,
    PutTemaComponent,
    DeleteTemaComponent,
    CasaComponent,
    PerfilComponent,
    HomePageComponent,
    FeedPageComponent,
    FloatBtnComponent,
    DropdownTemasComponent,
    DialogFeedPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
